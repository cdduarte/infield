(() => {
  var $wrapper = document.getElementById('bubble-wrap');

  if (document.addEventListener) { // W3C
    $wrapper.addEventListener('click', btnHandler, false);
  } else if (document.attachEvent) { // IE
    $wrapper.attachEvent('onclick', btnHandler);
  } else { // last resort
    $wrapper.onclick = btnHandler;
  }

  function btnHandler(e) {

    // get event and source element
    e = e || window.event;
    var node = e.target || e.srcElement;

    // filter out clicks
    if (node.nodeName.toLowerCase() !== "button") {
      return;
    }

    // toggle follow btn style
    if(boolClass(node, "user-card__btn--active")) {
      deleteClass(node, "user-card__btn--active")
    } else {
      assignClass(node, "user-card__btn--active")
    }

    // stop bubbling
    if (typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }

    if (typeof e.cancelBubble !== "undefined") {
      e.cancelBubble = true;
    }

    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    if (typeof e.returnValue !== "undefined") {
      e.returnValue = false;
    }
  }

  function boolClass(e, className) {
    if (e.classList) {
      return e.classList.contains(className);
    } else {
      // IE
      return !!e.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  }

  function deleteClass(e, className) {
    if (e.classList) {
      e.classList.remove(className);
    }
    else if (hasClass(e, className)) {
      // IE
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      e.className = e.className.replace(reg, ' ');
    }
  }

  function assignClass(e, className) {
    if (e.classList) {
      e.classList.add(className);
    }
    else if (!hasClass(e, className)) {
      // IE
      e.className += " " + className;
    }
  }
})();
