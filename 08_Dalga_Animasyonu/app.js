const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => {
    label.innerHTML = label.innerText     // label içerisindeki Html içerisine girdik ve label içerisindeki text lere ulaştık
        .split("")    // innerText i ayırdık
        .map(         // map ile işlem atadık
            (letter, index) => 
                `<span style="transition-delay: ${index * 50}ms">${letter}</span>`  // burada harflerin index numarasını 50 ile çarpıp animasyonda ms olarak belirledik ve ${letter} ile bütün harflere ulaşabildik
        )
        .join('')    //map ile yapılan işlemi join ile birleştirdik
})