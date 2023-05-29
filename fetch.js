async function loadData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json()) //! res.json convierte la respuesta en un json
//   .then((data) => console.log(data));
