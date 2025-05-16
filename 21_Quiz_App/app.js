const quizData = [
    {
        question: 'En aktif Twitter kullanıcısı?',    // soru
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'a',        // cevap
    },
    {
        question: 'En komik Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'b',
    },
    {
        question: 'En gezen Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'd',
    },
    {
        question: 'En üretken Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'c',
    },
    {
        question: ' Co-founder zetupme?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'e',
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");   // birden fazla şık olduğu için querySelectorAll kullandık
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text"); 
const c_text = document.getElementById("c_text"); 
const d_text = document.getElementById("d_text"); 
const e_text = document.getElementById("e_text"); 
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;   // başlangıçta hangi soruda olduğumuzu bilmek için
let score = 0;     // başlangıç

loadQuiz()

function loadQuiz() {

    deselectedAnswers(); // işaretli şık varsa temizle

    const currentQuizData = quizData[currentQuiz]    // yukarıdaki soruları çektik

    questionEl.innerText = currentQuizData.question;   // question içine soruları çektik ve onuda html kısmına atadık. 
    a_text.innerText = currentQuizData.a              // burada şıkları çektik
    b_text.innerText = currentQuizData.b              
    c_text.innerText = currentQuizData.c              
    d_text.innerText = currentQuizData.d              
    e_text.innerText = currentQuizData.e              
}

function deselectedAnswers() {     // seçilmeyen şıklar false
    answerEls.forEach(answerEls => answerEls.checked = false)
} 

function getSelected(){           // aşağıda seçilen şıkkın id sini göndererek hangi şıkkı seçtiğimizin bilgisini vermiş olduk
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer  
}

submitBtn.addEventListener("click", () => {    // buton a click event i ekleyerek seçim yaptık
    const answer = getSelected()

    if(answer) {           // seçilen şık doğru ise score 1 artacak
        if(answer === quizData[currentQuiz].correct){  // işaretlediğimiz(answer) eğer doğru(correct) ise 
            score++         
        }else {        // cevabın doğru değilse doğru şıkkı gösterecek
            alert(`Yanlış cevap! Doğru cevap: ${quizData[currentQuiz][quizData[currentQuiz].correct]}`);
        }

        currentQuiz++       // soru sayısı 1 artacak

        if(currentQuiz < quizData.length){   // currentQuiz soru sayısından az ise artacak ve loadQuiz fonksiyonu çalışmaya(yeni sorular) devam edecek
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>Test tamamlandı, ${score} doğru cevabınız var. Puan: ${(score / quizData.length * 100).toFixed(0)} </h2> <!-- Burada soru sayısına göre score hesapladık -->
                <button class="submit" onClick="location.reload()"> Tekrar Dene </button>
            `
        }
    } else {
        alert("Lütfen bir cevap verin");
    }
})
