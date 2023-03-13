document.querySelectorAll('input[name="right_end"]').forEach((option) => {
  option.addEventListener('change', (event)=> {
    let item = event.target.value;
    console.log(item);
  });
});
