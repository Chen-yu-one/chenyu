//创建对象
let myobject = new Object();
myobject.name = 'chenyu';
myobject.age = 20;
console.log(myobject);

//2.通过对象字面量创建对象
const oStudent = {};
oStudent.name = 'chen';
oStudent.age = 20;

const oStudent = {
    name:'xiao',
    age:20
};
console.log(oStudent.name);
console.log(typeof oStudent); //object

//array
const a2 = [];
a2[0] = 'a';
a2[1] = 2;
a2[2] = true;
console.log(a2[2])
console.log(a2 instanceof Array)
const a3 = [1,2,3,'abc',true,undefined,null];

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];//数组
delete avengers[2];
console.log(avengers);

const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a},b=${b},c=${c},d=${d}`);

const [a,b,c,d] = [1,2,3,4];//结构用法
console.log(`a=${a},b=${b},c=${c},d=${d}`);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
console.log(avengers.length);//数组长度
avengers.length = 1;//长度赋值为一时
console.log(avengers);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
avengers.pop();//删除数组末尾
console.log(avengers);
avengers.push('蚁人');//添加一个元素在末尾
console.log(avengers);
avengers.shift();//删除数组首位 
console.log(avengers);
console.log(avengers.shift());
avengers.unshift('蜘蛛侠');//在首位添加一个元素
console.log(avengers);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const hero = ['队长','雷','巨人','铁侠'];
const ah = avengers.concat(hero);//合并数组concat
console.log(avengers,hero,ah);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const hero = ['队长','雷','巨人','铁侠'];
const ah = [...avengers,...hero];//合并数组用...
console.log(ah);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const av1 = avengers.join();//默认用逗号分隔元素join
const av2 = avengers.join('&');
console.log(av2);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const av3 = avengers.slice(1, 3);//slice切片，切掉数组的第二个和第三个以外的元素
console.log(avengers);
console.log(av3);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const av4 = avengers.splice(1,2,'大哥','大姐');//splice 切掉相应元素，添加元素
console.log(av4);
console.log(avengers);

const number1 = [1,2,4,3,8,4,20];
const a = number1.sort();//sort将数组元素按照字母排序
console.log(number1);
console.log(a);

const str = ['a','b','c',1];
str.reverse();//对数组倒叙排序
console.log(str);

const avengers = ['美国队长','雷声','女巨人','钢铁侠'];
const a = avengers.indexOf('美国队长');//indexof查找此元素是否在数组里
console.log(a);

//多维数组
const a = [[1,2],[3,4]];
console.log(a);
console.log(a[0][1])
console.log(a[1][1])



//Set集合
const oset = new Set();
oset.add(1)
oset.add(2)
oset.add(3).add(4).add(5)
oset.add(6)
console.log(oset);

const list1 = new Set([1,2,3,4,5,6])
console.log(list1);

const list2 = new Set('hello');
console.log(list2);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list.size);

list4.size = 2//size看有几个集合
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
a = list4,has('brown')//has判断是否存在
console.log(a);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
b = list4.delete('fox');//delete删除元素
console.log(b);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const c = [...list4];将集合转换为数组
console.log(c);

//数组去重
const oArray1 = [1,2,12,3,4,1,2,4,5];
const oSet1 = new Set(oArray1);//将数组转换为集合
console.log(oSet1);
const oArray2 = [...oSet1];//将集合转换为数组
console.log(oArray2);

//weakset
let student = {
    name: 'chenyu',
    age: 20
};

const storng = new Set();
storng.add(student);
student = null;
console.log(storng.has(student));

//map键值对
const oMap = new Map();
oMap.set(1, "I");
oMap.set(2,"II").set(3,"III").set(4,"IV");
console.log(oMap)
console.log(oMap.size)
const a = oMap.get(4)
console.log(a);
oMap.set('name','chenyu');
const b =oMap.get('name')
console.log(oMap);
console.log(b)

const oMap = new Map().set(1, "I").set(2,"II").set(3,"III").set(4,"IV");
const oArray = [...oMap];//将数值对转换为数组
console.log(oArray);