function cls(){
  let xml = new XMLHttpRequest()
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
    }
  }
  xml.open('Get',"./text.txt",true)
  xml.send()
}
cls();