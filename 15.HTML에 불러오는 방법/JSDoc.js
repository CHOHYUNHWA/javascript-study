
/** 코드의 제목으로 사용될 문자열 */
const TITLE = 'JSDoc 사용하기';

/**
 * 원주율
 * @type {number}
 * @const
 */
const PI = '3.14';


/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} 두 수의 합
 */
const add = (x,y) => x + y;

console.log(add(5,5));

/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼여부
 */

/**
 * 
 * @param {string} name 이름
 * @param {number} age 나이
 * @param {boolean} married 기혼여부
 * @returns {PersonObj}
 */
function getPersonObj (name, age, married) {
  return {name, age, married}
}

const person1 = getPersonObj('홍길동', 25, true);
console.log(person1.name, person1.age, person1.married);

/**
 * @constructor
 * @param {string} name 
 * @param {number} age 
 */
function Person(name, age){
  this.name = name;
  this.age = age;
}



/**
 * 새 클래스
 * @class
 */
class Bird{
  /**
   * @constructs
   * @param {string} name 
   * @param {string} sound 
   */
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }
}

/**
 * @todo 실행 속도 개선 필요
 */
function slowFunction(){
  console.log('느릿느릿');
}



/**
 * @see {@link https://test.com} 참조
 */
function testFunc(){
  //...
}


/**
 * @readonly
 * @const {string}
 */
const READONLY = '건들지마라';


/**
 * @deprecated 12.01부터 중단
 */
function oldFunction(){
  console.log('Deprecated된 메서드 입니다.');
}
