export const createTrimmedText = (textNodes, trimmedTextSize) => {
  textNodes.forEach((node) => {
    const content = node.innerHTML;
    node.innerHTML = "";

    const nonTrimmedText = document.createElement("span");
    nonTrimmedText.classList.add("non-trimmed");
    nonTrimmedText.innerHTML = content;

    const trimmedText = document.createElement("span");
    trimmedText.classList.add("trimmed");
    trimmedText.innerHTML = content.slice(0, trimmedTextSize) + "...";

    const fragment = document.createDocumentFragment();
    fragment.append(nonTrimmedText, trimmedText);

    node.appendChild(fragment);
  });
};
