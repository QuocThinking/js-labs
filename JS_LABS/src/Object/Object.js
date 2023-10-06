/**
 *  1) Object
 *
 *  */
const student = {
  id: 1,
  name: 'Le Quoc',
  age: 18,
  'key has space': 'super',
  sayHello() {
    console.log('hello');
  },
};

// Get value
console.log(student.age);
console.log(student.name);
console.log(student['key has space']);

// update value
student.name = 'Le Thanh Quoc';

// set new key
student.work = 'IT';
student['address'] = 'HCM';

// remove name key
delete student.name;

/**
 * 2 ) Tham trị và Tham chiếu
 */
// -------
/**
 * 1.1 ) ReferenceType(Tham chiếu) : Object, array, function
 * -> tham chiếu chỉ chứa địa chỉ, trõ tới địa chỉ vùng nhớ để tham chiếu
 */
const student = {
  id: 1,
  name: 'Quoc',
};
// -> student ; 123456 -> Address : 123456 {value : ?,?,?,...}

/**
 * 1.2) Primitive Type (Tham trị) :
 * -> chứa giá trị
 */

const name = 'Le Quoc';
const age = 18;
const isHero = true;

/**
 * 1.3) Dùng In kiểm tra key
 */

const student = {
  name: 'Easy Frontend',
  age: 18,
};
'name' in student;
'address' in student;
console.log('name' in student);

/**
 *  1.4) Clone Object
 */

const moreProps = {
  isHero: true,
  gender: 'male',
};

const cloneObject = {
  ...moreProps,
};

console.log(cloneObject.gender);

/** 2) DUYỆT KEYS */

// v1
const student = {
  id: 1,
  name: 'Le Quoc',
  isHero: true,
};

const keyList = Object.keys(student); // get key
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  console.log('key : ', key);
  console.log('Value : ', student[key]);
}

// v2

const student = {
  id: 1,
  name: 'Le Quoc',
  isHero: true,
};

Object.keys(student).forEach((key) => {
  console.log('key : ', key);
  console.log('value : ', student[key]);
});

// v3 : forin

const student = {
  id: 1,
  name: 'Le Quoc',
  isHero: true,
};
for (let key in student) {
  console.log('key :', key);
  console.log('value', student[key]);
}

// v4 Object destructing
const student = {
  id: 1,
  name: 'Le Quoc',
};
const { id, name } = student;

console.log(id);
console.log(name);
