function editElement(ref, match, replacer) {
    // get the text content of the element
     let toReplace = ref.textContent;
     // construct a regexp with the matcher
     const matcher = new RegExp(match, 'g');
     // edit replacing the matcher with the replacer
     let edited = toReplace.replace(matcher,replacer)
     // set the result of the replacement as the new textContent
     return ref.textContent=edited
}
