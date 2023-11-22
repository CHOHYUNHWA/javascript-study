class Bird {
  wings = 2;
}

class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird{
  swim() {console.log('수영중...');}
}
class EmperorPenguin extends Penguin{
  size = 'XXXL';
}


class YalcoChicken{
  no = 0;
  menu = {'후라이드' : 10000, '양념치킨' : 12000};

  constructor(name,no){
    this.name = name;
    this.no = no;
  }
  introduce(){
    return `어서오세요 ${this.no}호 ${this.name}점 입니다.`
  }
  order(name){
    return `name은 ${this.menu[name]}원 입니다.`
  }
}

class ConceptYalcoChicken extends YalcoChicken{
  #position = '';

  constructor(name,no,position){
    super(name,no);
    this.#position = position;
  }

  introducePosition(){
    return `${this.no}호 ${this.name}점의 위치는 ${this.#position}에 위치하고 있습니다.`
  }
}

const chain2 = new ConceptYalcoChicken('판교행복타운',3,'판교');

console.log(chain2.introducePosition());
