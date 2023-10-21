$(function () {
  const filteredCards = document.querySelector(".filteredCards");
  const API_URL = "https://challenges.brainster.tech/ajax_data/data.json";
  const listButtons = document.querySelectorAll(".fixedNav li");
  const spanCount = document.querySelectorAll(".counter");


  function renderingCards(name, img, price) {
    const divEl = document.createElement("div");
    divEl.classList.add("card");
    divEl.innerHTML += `
      <img src="./img/${img}.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-title">${price} $</p>
      </div>
    `;
    filteredCards.append(divEl);
  }

  let allData;

  const updateCategoryCount = () => {
    const categoryCounts = allData.products.reduce((counts, product) => {
      const category =  product.brand.toLowerCase().replace(/\s+/g,"") || product.gender.toLowerCase();
      counts[category] = (counts[category] || 0) + 1;
      counts["all"] = (counts["all"] || 0) + 1; 
      return counts;
    }, {});
    spanCount.forEach((span) => {
      const category = span.dataset.category;
      span.textContent = categoryCounts[category] || 0;
    });
    for (const category in categoryCounts) {
      if (category !== "all") {
        const brandSpan = document.querySelectorAll(`[data-category="${category}"]`);
        brandSpan.forEach((brand)=>{
          if (brand) {
            brand.textContent = categoryCounts[category] || 0;
          }
        })
      }
    }
  };

  const asyncAwait = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error occurred while fetching cards.");
      }
      allData = await response.json();
      allData.products.forEach((product) => {
        renderingCards(product.name, product.image, product.price);
      });
      // Call the function to update the category counts
      updateCategoryCount();
    } catch (error) {
      throw error;
    }
  };
  asyncAwait();

  listButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let filterCriteria = e.target.getAttribute("id");
      if (filterCriteria.includes("showAll")) {
        allData.products.forEach((product) => {
          renderingCards(product.name, product.image, product.price);
          updateCategoryCount();
        });
      } else {
        let filteredProducts = allData.products.filter(
          (product) =>
            product.brand.toLowerCase().replace(/\s+/g, "").includes(filterCriteria.toLowerCase()) ||
            product.gender.toLowerCase().includes(filterCriteria.toLowerCase())
        );
        filteredCards.innerHTML = "";
        filteredProducts.forEach((product) => {
          renderingCards(product.name, product.image, product.price);
        });
      }
      // Call the function to update the category counts after filtering
      updateCategoryCount();
    });
  });
});