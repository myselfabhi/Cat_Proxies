"use client"
import { useEffect, memo } from "react"

function GoogleTranslate() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,zh,hi,es,fr,ar,pt,ru,id,de,ja,ko,it,nl,tr,vi,pl",
      },
      "google_translate_element"
    )
  }

  useEffect(() => {
    // hack to solve the bug node removeChild error
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot remove a child from a different parent",
              child,
              this
            )
          }
          return child
        }
        return originalRemoveChild.apply(this, arguments)
      }

      const originalInsertBefore = Node.prototype.insertBefore
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot insert before a reference node from a different parent",
              referenceNode,
              this
            )
          }
          return newNode
        }
        return originalInsertBefore.apply(this, arguments)
      }
    }

    if (
      !document.querySelector("#google-translate-script") &&
      !window.scriptAdded
    ) {
      // first add element
      const addElement = document.createElement("div")
      addElement.id = "google_translate_element"
      addElement.setAttribute("key", Math.random().toString(36).substring(7))
      document.body.appendChild(addElement)

      // adding script
      const addScript = document.createElement("script")
      addScript.id = "google-translate-script"
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      addScript.async = true
      document.body.appendChild(addScript)
      window.googleTranslateElementInit = googleTranslateElementInit
      window.scriptAdded = true
    }
  }, [])
  return null
}

export default memo(GoogleTranslate)
