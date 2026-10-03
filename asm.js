
        
        
        const products = [ 
            {
                id: 1,
                name: "Áo thun nam basic",
                category: "nam",
                categoryName: "Đồ Nam",
                price: 150000,
                oldPrice: 200000,
                discount: 25,
                image: "https://placehold.co/300x300/2563eb/ffffff?text=Ao+Thun+Nam",
                description: "Áo thun nam đơn giản, dễ mặc.",
                sold: 120,
                isHot: true,
                isNew: false
            },
            {
                id: 2,
                name: "Quần jean nam",
                category: "nam",
                categoryName: "Đồ Nam",
                price: 350000,
                oldPrice: 450000,
                discount: 22,
                image: "https://placehold.co/300x300/1e293b/ffffff?text=Quan+Jean+Nam",
                description: "Quần jean nam thời trang.",
                sold: 95,
                isHot: true,
                isNew: false
            },
            {
                id: 3,
                name: "Áo sơ mi nam",
                category: "nam",
                categoryName: "Đồ Nam",
                price: 280000,
                oldPrice: 350000,
                discount: 20,
                image: "https://placehold.co/300x300/0284c7/ffffff?text=Ao+So+Mi",
                description: "Áo sơ mi nam lịch sự.",
                sold: 80,
                isHot: false,
                isNew: true
            },
            {
                id: 4,
                name: "Áo polo nam",
                category: "nam",
                categoryName: "Đồ Nam",
                price: 250000,
                oldPrice: 320000,
                discount: 22,
                image: "https://placehold.co/300x300/0f766e/ffffff?text=Ao+Polo",
                description: "Áo polo nam năng động.",
                sold: 75,
                isHot: true,
                isNew: true
            },

            {
                id: 16,
                name: "Áo thun nữ",
                category: "nu",
                categoryName: "Đồ Nữ",
                price: 160000,
                oldPrice: 220000,
                discount: 27,
                image: "https://placehold.co/300x300/db2777/ffffff?text=Ao+Thun+Nu",
                description: "Áo thun nữ trẻ trung.",
                sold: 130,
                isHot: true,
                isNew: false
            },
            {
                id: 17,
                name: "Váy nữ thời trang",
                category: "nu",
                categoryName: "Đồ Nữ",
                price: 320000,
                oldPrice: 400000,
                discount: 20,
                image: "https://placehold.co/300x300/e11d48/ffffff?text=Vay+Nu",
                description: "Váy nữ thời trang, dễ phối đồ.",
                sold: 110,
                isHot: true,
                isNew: true
            },
            {
                id: 18,
                name: "Quần jean nữ",
                category: "nu",
                categoryName: "Đồ Nữ",
                price: 300000,
                oldPrice: 380000,
                discount: 21,
                image: "https://placehold.co/300x300/9333ea/ffffff?text=Quan+Jean+Nu",
                description: "Quần jean nữ cá tính.",
                sold: 90,
                isHot: false,
                isNew: true
            },
            {
                id: 19,
                name: "Áo khoác nữ",
                category: "nu",
                categoryName: "Đồ Nữ",
                price: 420000,
                oldPrice: 500000,
                discount: 16,
                image: "https://placehold.co/300x300/c026d3/ffffff?text=Ao+Khoac+Nu",
                description: "Áo khoác nữ phong cách.",
                sold: 70,
                isHot: true,
                isNew: false
            },
            {
                id: 31,
                name: "Áo thun trẻ em",
                category: "treem",
                categoryName: "Trẻ Em",
                price: 120000,
                oldPrice: 160000,
                discount: 25,
                image: "https://placehold.co/300x300/16a34a/ffffff?text=Ao+Tre+Em",
                description: "Áo thun trẻ em dễ thương.",
                sold: 100,
                isHot: true,
                isNew: false
            },
            {
                id: 32,
                name: "Quần short trẻ em",
                category: "treem",
                categoryName: "Trẻ Em",
                price: 130000,
                oldPrice: 170000,
                discount: 24,
                image: "https://placehold.co/300x300/ca8a04/ffffff?text=Quan+Short",
                description: "Quần short trẻ em thoải mái.",
                sold: 85,
                isHot: false,
                isNew: true
            },
            {
                id: 33,
                name: "Váy trẻ em",
                category: "treem",
                categoryName: "Trẻ Em",
                price: 180000,
                oldPrice: 230000,
                discount: 22,
                image: "https://placehold.co/300x300/ea580c/ffffff?text=Vay+Tre+Em",
                description: "Váy trẻ em đáng yêu.",
                sold: 78,
                isHot: true,
                isNew: true
            },
            {
                id: 34,
                name: "Áo khoác trẻ em",
                category: "treem",
                categoryName: "Trẻ Em",
                price: 250000,
                oldPrice: 300000,
                discount: 17,
                image: "https://placehold.co/300x300/0d9488/ffffff?text=Ao+Khoac+Tre",
                description: "Áo khoác trẻ em ấm áp.",
                sold: 60,
                isHot: false,
                isNew: true
            }
        ];

      
        function loadbanchay() {
            const productList = document.querySelector("#loadbanchay");// hiển thị sp

            if (!productList) return;

            const html = [...products]
                .sort((a, b) => b.sold - a.sold)
                .slice(0, 8)
                .map((product) => {
                    const salePrice = product.price - (product.price * product.discount / 100);

                    return `
                        <div class="product-card cat-${product.category}">
                            <div class="badge-sale">
                                -${product.discount}%
                            </div>

                            ${product.isHot ? `
                                <div class="badge-hot">
                                    HOT
                                </div>
                            ` : ""}

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="product-img"
                            >

                            <div class="product-info">
                                <span class="category-tag">
                                    ${
                                        product.category === "nam"
                                        ? "Nam"
                                        : product.category === "nu"
                                        ? "Nữ"
                                        : "Trẻ em"
                                    }
                                </span>

                                <h3 class="product-name">
                                    ${product.name}
                                </h3>

                                <p class="product-desc">
                                    ${product.description}
                                </p>

                                <div class="price-box">
                                    <span class="current-price">
                                        ${salePrice.toLocaleString()}đ
                                    </span>
                                    <span class="old-price">
                                        ${product.price.toLocaleString()}đ
                                    </span>
                                </div>

                                <div class="sold-count">
                                    Đã bán: ${product.sold}
                                </div>

                                <button class="btn-add">
                                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    `;
                })
                .join("");

            productList.innerHTML = html;
        }

        // ======================================================
        // HIỂN THỊ SẢN PHẨM MỚI
        // ======================================================
        function loadnew() {
            const productList = document.querySelector("#loadnew");
            if (!productList) return;

            const html = [...products]
                .filter((product) => product.isNew === true)
                .map((product) => {
                    const salePrice = product.price - (product.price * product.discount / 100);

                    return `
                        <div class="product-card cat-${product.category}">
                            <div class="badge-sale">
                                -${product.discount}%
                            </div>

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="product-img"
                            >

                            <div class="product-info">
                                <span class="category-tag">
                                    ${
                                        product.category === "nam"
                                        ? "Nam"
                                        : product.category === "nu"
                                        ? "Nữ"
                                        : "Trẻ em"
                                    }
                                </span>

                                <h3 class="product-name">
                                    ${product.name}
                                </h3>

                                <p class="product-desc">
                                    ${product.description}
                                </p>

                                <div class="price-box">
                                    <span class="current-price">
                                        ${salePrice.toLocaleString()}đ
                                    </span>
                                    <span class="old-price">
                                        ${product.price.toLocaleString()}đ
                                    </span>
                                </div>

                                <div class="sold-count">
                                    Đã bán: ${product.sold}
                                </div>

                                <button class="btn-add">
                                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    `;
                })
                .join("");

            productList.innerHTML = html;
        }

        // ======================================================
        // HIỂN THỊ TẤT CẢ SẢN PHẨM
        // ======================================================
        function loadall() {
            const productList = document.querySelector("#loadall");
            if (!productList) return;

            const html = products
                .map((product) => {
                    const salePrice = product.price - (product.price * product.discount / 100);

                    return `
                        <div class="product-card cat-${product.category}">
                            <div class="badge-sale">
                                -${product.discount}%
                            </div>

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="product-img"
                            >

                            <div class="product-info">
                                <span class="category-tag">
                                    ${
                                        product.category === "nam" ? "Nam"
                                        : product.category ==="nu" ? "Nữ"
                                        : "Trẻ em"
                                    }
                                </span>

                                <h3 class="product-name">
                                    ${product.name}
                                </h3>

                                <p class="product-desc">
                                    ${product.description}
                                </p>

                                <div class="price-box">
                                    <span class="current-price">
                                        ${salePrice.toLocaleString()}đ
                                    </span>
                                    <span class="old-price">
                                        ${product.price.toLocaleString()}đ
                                    </span>
                                </div>

                                <div class="sold-count">
                                    Đã bán: ${product.sold}
                                </div>

                                <button class="btn-add">
                                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    `;
                })
                .join("");

            productList.innerHTML = html;
        }

    
        
        window.onload = function() {
            loadbanchay();
            loadnew();
            loadall();
        };

        // ===============================
        // HIỂN THỊ SẢN PHẨM ĐÃ LỌC
        // ===============================
        function locNam() {
            let sp = products.filter(function(product) {
                return product.category == "nam";
            });
            hienThiLoc(sp);
        }

        function locNu() {
            let sp = products.filter(function(product) {
                return product.category == "nu";
            });
            hienThiLoc(sp);
        }

        function locTreEm() {
            let sp = products.filter(function(product) {
                return product.category == "treem";
            });
            hienThiLoc(sp);
        }

        function locTatCa() {
            hienThiLoc(products);
        }

        // ======================================================
        // HÀM HIỂN THỊ SẢN PHẨM SAU KHI LỌC (HÀM ĐƯỢC BỔ SUNG)
        // ======================================================
        function hienThiLoc(spList) {
            const productList = document.querySelector("#loadall");
            if (!productList) return;

            const html = spList
                .map((product) => {
                    const salePrice = product.price - (product.price * product.discount / 100);

                    return `
                        <div class="product-card cat-${product.category}">
                            <div class="badge-sale">
                                -${product.discount}%
                            </div>

                            ${product.isHot ? `
                                <div class="badge-hot">
                                    HOT
                                </div>
                            ` : ""}

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="product-img"
                            >

                            <div class="product-info">
                                <span class="category-tag">
                                    ${
                                        product.category === "nam"
                                        ? "Nam"
                                        : product.category === "nu"
                                        ? "Nữ"
                                        : "Trẻ em"
                                    }
                                </span>

                                <h3 class="product-name">
                                    ${product.name}
                                </h3>

                                <p class="product-desc">
                                    ${product.description}
                                </p>

                                <div class="price-box">
                                    <span class="current-price">
                                        ${salePrice.toLocaleString()}đ
                                    </span>
                                    <span class="old-price">
                                        ${product.price.toLocaleString()}đ
                                    </span>
                                </div>

                                <div class="sold-count">
                                    Đã bán: ${product.sold}
                                </div>

                                <button class="btn-add">
                                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    `;
                })
                .join("");

            productList.innerHTML = html;
        }

        // Hàm hỗ trợ đổi active class cho nút lọc
        function handleFilter(btnElement, filterFunction) {
            const filterBtns = document.querySelectorAll('.btn-filter');
            filterBtns.forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            filterFunction();
        }
   