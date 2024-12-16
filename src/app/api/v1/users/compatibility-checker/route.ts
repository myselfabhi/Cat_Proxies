const dns = require("dns")
import prisma from "@prisma/index"
import { NextRequest } from "next/server"
import validation from "./validation"
import { createError, createResponse } from "@/utils/helpers/response"
import messages from "@/utils/helpers/messages"
import { ProxyTypeOptions } from "@prisma/client"

interface ResolveResult {
  error: string | null
  data: string[] | null
}

export const POST = async (request: NextRequest) => {
  let domainAddress = ""

  // Validate
  const { error, value } = validation.post.validate(await request.json())
  if (error) {
    return createError({
      message: messages.VALIDATION_ERROR,
      payload: error.details,
    })
  }
  const { domain, proxyType }: { domain: string; proxyType: ProxyTypeOptions } =
    value
  domainAddress = domain
  let errorMessage = ""
  try {
    let a4Records: any[] = []

    // resolve reject promise
    const promise = new Promise<ResolveResult>((resolve, reject) => {
      dns.resolve6(domain, (error: any, addresses: any[]) => {
        if (error) {
          if (error.code === "ENODATA") {
            console.log(`${domain} does not have any AAAA (IPv6) records.`)
            errorMessage = "No AAAA (IPv6) records found"
            resolve({ error: errorMessage, data: null })
          } else {
            console.error(
              `Error checking IPv6 compatibility for ${domain}:`,
              error.message
            )
            errorMessage = "Error checking IPv6 compatibility"
            resolve({ error: errorMessage, data: null })
          }
        } else {
          console.log(`${domain} has the following AAAA (IPv6) records:`)
          addresses.forEach((address, index) => {
            console.log(`${index + 1}. ${address}`)
          })
          errorMessage = ""
          a4Records = [...addresses]
          resolve({ error: null, data: addresses })
        }
      })
    })

    const { error: promiseError, data } = await promise
    if (promiseError || !data) {
      await prisma.compatibilityChecker.create({
        data: {
          domain: domain,
          proxyType: proxyType,
          metaData: JSON.stringify({ records: null, error: errorMessage }),
          compatible: false,
        },
      })
      return createError({
        message: errorMessage,
        payload: {
          compatible: false,
          domain: domainAddress,
        },
      })
    } else {
      await prisma.compatibilityChecker.create({
        data: {
          domain: domain,
          proxyType: proxyType,
          metaData: JSON.stringify({ records: a4Records, error: null }),
          compatible: true,
        },
      })
      return createResponse({
        message: messages.SUCCESS,
        payload: { a4Records: data, compatible: true, domain: domainAddress },
      })
    }
  } catch (error: any) {
    console.log(error, "error")
    await prisma.compatibilityChecker.create({
      data: {
        domain: domain,
        proxyType: proxyType,
        metaData: JSON.stringify({ records: null, error: errorMessage }),
        compatible: false,
      },
    })
    return createError({
      message: error.message || messages.SOMETHING_WENT_WRONG,
      payload: {
        compatible: false,
        domain: domainAddress,
      },
    })
  }
}
