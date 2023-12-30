export default class Theme {
  constructor() {
    this.dark = {
      backgroundNavBar: 'transparent',
      background: '#000',
      colorSun: '#fff',
      colorMoon: '#fff',
      color: '#fff',
      fontColor: '#fff',
      fontColorHover: '#fff',
      

      
    };
    this.light = {
      backgroundNavBar: 'transparent',
      colorSun: '#000',
      colorMoon: '#000',
      color: '#000',
      background: '#fff',
      fontColor: '#000',
      fontColorHover: '#000',
    };
  }

  getLightTheme() {
    return this.light || {};
  }

  getDarkTheme() {
    return this.dark || {};
  }
}
