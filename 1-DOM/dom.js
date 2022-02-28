function manipulateDom() {
    document.querySelectorAll('.quote')
        .forEach(quote => {
            quote.style.fontStyle = "italic";
            quote.style.borderColor = "blue";
            quote.style.backgroundColor = "lightblue";
        });
};

export { manipulateDom };
