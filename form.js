const students=[];
const $=s=>document.querySelector(s);
const tbody=document.querySelector('tbody'),nameInp=$('#name'),marksInp=$('#marks'),searchInp=$('#search');
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const render=l=>tbody.innerHTML=l.map((s,i)=>`<tr><td>${i+1}</td><td>${esc(s.name)}</td><td>${s.marks}</td><td>${s.marks>=40?'PASS':'FAIL'}</td></tr>`).join('');
const cb=(l,fn)=>fn(l);

function addStudent(){const n=nameInp.value.trim(),m=+marksInp.value;if(!n||!Number.isFinite(m)||m<0)return;students.push({name:n,marks:m});nameInp.value=marksInp.value='';cb(students,render);}
function showAllStudents(){cb(students.map(s=>({name:s.name,marks:s.marks})),render);}
function showPassed(){cb(students.filter(s=>s.marks>=40),render);}
function calculateAverage(){if(!students.length)return alert('No students');alert(`Average marks: ${(students.reduce((a,s)=>a+s.marks,0)/students.length).toFixed(2)}`);}
function findTopper(){if(!students.length)return alert('No students');let t=students[0];for(let i=1;i<students.length;i++)if(students[i].marks>t.marks)t=students[i];cb([t],render);}

searchInp.addEventListener('input',()=>{const q=searchInp.value.trim().toLowerCase();cb(q?students.filter(s=>s.name.toLowerCase().includes(q)):students,render);});

const b=document.querySelectorAll('button');
b[0].onclick=addStudent;
b[1].onclick=()=>{nameInp.value=marksInp.value='';nameInp.focus();};
b[2].onclick=()=>{if(confirm('Reset?')){students.length=0;render(students);}};
b[3].onclick=showAllStudents;
b[4].onclick=showPassed;
b[5].onclick=calculateAverage;
b[6].onclick=findTopper;
render(students);
