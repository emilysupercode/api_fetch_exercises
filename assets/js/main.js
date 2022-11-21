fetch("https://picsum.photos/v2/list?page=5")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        data.forEach((photo) => {
            const id = photo.id;
            const author = photo.author;
            const width = photo.width;
            const height = photo.height;
            const url = photo.url;
            const download_url = photo.download_url;
            // console.log("id", id, "author", author, "width", width, "height", height, "url", url, "download_url", download_url)

            const photoElement = document.createElement("figure");
            photoElement.classList.add("formatting")
            const photoElementImg = document.createElement("img");
            photoElementImg.src = `${download_url}`;
            photoElementImg.classList.add("half-width");
            const photoElementCaption = document.createElement("figcaption");
            photoElementCaption.innerText = `Photo by ${author}, original size: ${width}px x ${height}px`;
            photoElement.appendChild(photoElementImg);
            photoElement.appendChild(photoElementCaption);

            document.body.appendChild(photoElement);
        })
    })