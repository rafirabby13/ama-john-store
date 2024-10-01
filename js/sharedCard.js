const sharedCardFunction = async (data) => {

    const { img, name, price, ratings, seller, stock,category
    } = data;
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="card  w-96 shadow-xl h-auto">
    <figure class="">
      <img class="h-80 w-full bg-none"
        src=${img}
        alt="products image is not found" />
    </figure>
    <div class="card-body ">
      <h2 class="card-title">
        ${name}
      </h2>
      <h1 >Price: <span class="font-bold text-2xl ">$ ${price}</span></h1>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">${category}</div>
        <div class="badge badge-outline">${ratings}</div>
      </div>
      <div>
      <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
       `;
       const cards = document.getElementById('cards')
       cards.appendChild(div)
//   })
};
sharedCardFunction();
