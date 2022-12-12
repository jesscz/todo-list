const clearForm = () => {
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.style.display = 'none';
    document.getElementById("myForm").reset();
}

export { clearForm }