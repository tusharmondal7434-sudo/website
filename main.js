// Email ফাংশন
function sendEmail() {
    window.location.href = "mailto:hello@example.com?subject=Inquiry&body=Hi there,";
}

// স্ক্রল করলে হেডার এর কালার চেঞ্জ হবে
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '10px 0';
    } else {
        nav.style.padding = '20px 0';
    }
});

// টেক্সট এনিমেশন (কনসোল এ চেক করার জন্য)
console.log("Website Loaded Successfully!");