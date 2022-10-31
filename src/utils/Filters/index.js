export const nombreNivelTension = value => {
  switch  (value) {
      case 2:
          return 'II';
      case 3:
          return 'III';
      case 4:
          return 'IV';
      case 5:
          return 'STN';
      default:
          return 'I'
  }
}
