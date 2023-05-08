function letsGo() {
    setTimeout(() => console.log("Printing Let's Go 1st time."), 1000)

    function letsGo() {
        setTimeout(() => console.log("Printing Let's Go 2nd time."), 1000)

        function letsGo() {
            setTimeout(() => console.log("Printing Let's Go 3st time."), 1000)

            function letsGo() {
                setTimeout(() => console.log("Printing Let's Go 4st time."), 1000)

                function letsGo() {
                    setTimeout(() => console.log("Printing Let's Go 5st time."), 1000)

                }
            }
        }
    }
}

letsGo()