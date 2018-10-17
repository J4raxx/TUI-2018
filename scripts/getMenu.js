async function loadJSON (url){
  const res = await fetch(url);
  //console.log(res);
  return await res.json();
}

menu = loadJSON('../menu.json');
console.log(menu);