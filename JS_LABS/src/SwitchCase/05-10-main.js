function ClassifyStudent(mark) {
  switch (mark) {
    case 1:
    case 2:
    case 3:
    case 4:
      return 'Bad';
      break;
    case 5:
    case 6:
      return 'Not good';
      break;
    case 7:
    case 8:
      return 'Good';
      break;
    case 9:
    case 10:
      return 'Excellence';
      break;
    default:
      return 'Invalid mark';
      break;
  }
}

console.log(ClassifyStudent(2));
