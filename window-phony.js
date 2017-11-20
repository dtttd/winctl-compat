class Window {
  constructor() {
    this.windowHandle = null;
  }

  static GetActiveWindow() {}
  static GetWindowByClassName() {}
  static GetWindowByTitleExact() {}
  static EnumerateWindows() {}

  static New() {}

  exists() {
    return true;
  }
  isVisible() {
    return true;
  }
  getTitle() {
    return "Phony Winctl";
  }
  getHwnd() {
    return 12345;
  }
  getClassName() {
    return "WINCTL_PHONY";
  }
  getPid() {
    return 1234567;
  }

  getParent() {
    return null;
  }
  getAncestor() {
    return null;
  }
  getMonitor() {}

  setForegroundWindow() {}
  setWindowPos() {}
  showWindow() {}
  move() {}
  moveRelative() {}
  dimensions() {}
}

module.exports = Window;
