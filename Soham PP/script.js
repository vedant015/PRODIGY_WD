var tablinks = document.getElementaryByClassName("tab-links")
        var tabcontents = document.getElementaryByClassName("tab-contents")
        
        function opentab(tabname){
            for (tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

const scriptURL = 'https://script.google.com/macros/s/AKfycbwIAVE1JuAe_XxvPO8BJz6qx_J3_2QLwuq6-PFOJ_fVeQCCkxl8TeDBr9bn_9JT0TvX/exec'

const form = document.forms['submit-to-google-sheet']
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})