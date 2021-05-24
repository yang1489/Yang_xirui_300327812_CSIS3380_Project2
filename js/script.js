    var contactListBefore = document.querySelectorAll(".contact-list .contact-item");
    var contactList;
    var changepage;
    createPagination();
    contactList = contactListBefore ;
    changeContactList(0);

    function changeContactList(currentPage) {
        var pageCount = Math.ceil(contactList.length / 10);
        var contactindex = {
            start: currentPage * 10,
            end: currentPage * 10 + 9
        }
        updatePage(pageCount, currentPage, contactindex);
    }
    function updatePage(pageCount, currentPage, range) {
        for (var i = 0; i < contactListBefore .length; i++) {
            contactListBefore [i].style.display = "none";
        }
        for (var j = 0; j < contactList.length; j++) {
            if (j>= range.start && j <= range.end) {
                contactList[j].style.display = "block";
            }
        }
        var item = "";
        if (pageCount > 1) {
            for (var h = 0; h < pageCount; h++) {
                var currentLinkClass = (h==currentPage) ? 'class="active"' : '';

                item += '  <li>' +'<a ' + currentLinkClass + ' href="#">' + (h + 1) + '</a>' 
                            '<li>';
            }
        }
        changepage.innerHTML = item;
    }
    function createPagination() {
        var page = document.querySelector(".page");
        var paginate = document.createElement("div");
        paginate .setAttribute("class", "pagination");
        changepage = document.createElement("ul");
        paginate .appendChild(changepage);
        page.appendChild(paginate );
        changepage.addEventListener("click", (event) => {
        var pagenum = parseInt(event.target.textContent) - 1;
        changeContactList(pagenum);   
        });  
    }

