function handleFileChange(event){
  const file = event.target.files[0];
  let fileURL;
  
  if(!file){
    return;
  }

  const fileReader = new FileReader();

  fileReader.onload = () => {
    fileURL = fileReader.result;
  };
  
  fileReader.readAsDataURL(file);
}
