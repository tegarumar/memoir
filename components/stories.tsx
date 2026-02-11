"use client";

import { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";

const stories = [
  {
    id: 4,
    title: {
      en: "Would AI Replace Your Job?",
      id: "Apakah AI Akan Menggantikan Pekerjaanmu?",
    },
    excerpt: {
      en: "AI is a powerful technology that has been developing rapidly. Today, AI provides numerous benefits to humans, especially as a...",
      id: "AI adalah teknologi yang sangat powerful dan berkembang dengan pesat. Saat ini, AI telah memberikan banyak manfaat bagi manusia, terutama sebagai...",
    },
    content: {
      en: `AI is a powerful technology that has been developing rapidly. Today, AI provides numerous benefits to humans, especially as a "tool" to enhance productivity. One of the most common advantages of AI is its ability to serve as a reference, assist in decision-making, and improve efficiency in tasks such as summarizing documents, and so on. <br /><br />
However, alongside these immense benefits, there is growing concern that AI might replace human jobs. In my opinion, AI indeed has significant potential to take over certain types of work, especially tasks that are precise, repetitive, or routine. Examples include data entry, assembly-line manufacturing, or document management. Moreover, AI can also replace jobs requiring basic analysis and standard interactions, such as Customer Service or Virtual Assistants.<br /><br />

On the other hand, there are types of jobs that in my view will be "challenging" for AI to replace in the near future. These jobs often involve uncertain sciences, creativity, or serendipity, such as scientific research. Jobs requiring advanced technical skills and dynamic physical contexts—like tasks that engage the senses (touch, smell, hearing)—are also hard to substitute. Additionally, jobs that demand genuine empathy or emotional intelligence (EQ), such as teaching, psychology/therapy, and roles involving values, ethics, and complex subjective considerations, are likely to remain within the human domain.<br /><br />

As a Software Engineer, I also share this concern. There’s a story about someone who worked remotely from Indonesia for an American company. His role was in IT Security, responsible for maintaining system security. Unfortunately, he was laid off—not due to poor performance or being replaced by another person—but because his position was taken over by AI.<br /><br />

My hypothesis is that perhaps the cost of AI is more worthwhile than human labor. However, in Indonesia, AI might still be too expensive and not as intense as in America. Simply put, labor costs in Indonesia are cheaper than the cost of AI. Moreover, AI investment in Indonesia is still half-hearted. <br/>

It could also be because the company is a business entity not based in Indonesia. On that note, if the contract is not clear enough, freelancing across countries carries significant legal protection risks, which might be why they were laid off.
<br /><br />
Suppose AI were to replace your job. What would you do? Lower your price as much as possible so the company chooses you instead of AI? Or transition to a field that AI cannot easily replace?
<br /><br />
If you were a product, what would you do? Fit the market? Or continue to pursue your passion, even if it’s more challenging?

The world needs more listeners. Be one of them.`,
      id: `AI adalah teknologi yang sangat powerful dan berkembang dengan pesat. Saat ini, AI telah memberikan banyak manfaat bagi manusia, terutama sebagai "tools" yang membantu meningkatkan produktivitas. Salah satu manfaat paling umum dari AI adalah memberikan referensi, membantu dalam pengambilan keputusan, serta meningkatkan efisiensi, seperti dalam hal menyusun ringkasan (summarize) sebuah dokumen, dan sebagainya.<br /><br />
Dari banyaknya manfaat yang AI berikan, muncul keresahan bahwa teknologi ini dapat menggantikan pekerjaan manusia. Menurut saya, AI memang memiliki potensi besar untuk mengambil alih beberapa jenis pekerjaan, adapun jenis tugas atau pekerjaan yang potensial digantikan menurut saya seperti Ilmu pasti, pekerjaan yang berulang atau rutin misalnya seperti entri data, manufaktur berbasis assembly line, atau pengelolaan dokumen, lalu juga AI bisa menggantikan pekerjaan yang basisnya analisis sederhana, dan interaksi standard seperti Customer Service atau Virtual Assistant.<br /><br />
Di sisi lain, ada pula jenis pekerjaan yang menurut saya "sulit" digantikan oleh AI dalam waktu dekat. Pekerjaan ini biasanya melibatkan ilmu yang tidak pasti, 
kreativitas, atau serendipity, seperti penelitian ilmiah. Teknis tinggi dan konteks fisik yang dinamis misalnya pekerjaan yang harus melibatkan indera (meraba, mencium, mendegar), lalu juga empati yang tulus atau kecerdasan emosional (EQ) seperti guru, psikolog/terapis dan pekerjaan yang melibatkan nilai, etika & pertimbangan subjektif yang kompleks, kemungkinan besar akan tetap menjadi domain manusia.<br /><br /> Saya saat ini sebagai Software Engineer  juga merasakan keresahan yang sama, ada salah satu cerita dimana seseorang bekerja di perusahaan Amerika dan terkena layoff, kerjanya remote dari Indonesia, tentu gajinya cukup besar karena dibayar dalam bentuk USD. Pekerjaannya di bidang IT Security, yang bertugas menjaga keamanan sistem. Sayangnya, ia terkena layoff, bukan karena performanya buruk atau digantikan oleh orang lain, tetapi karena posisinya diambil alih oleh AI. <br /><br /> Hipotesis saya, mungkin karena costnya lebih worth it an AI daripada Manusia terlepas dari sementara itu di Indonesia mungkin AI masih terlalu mahal, dan belum se-intense di Amerika, kasarnya tenaga kerja di Indonesia lebih murah dari cost AI, toh juga di indonesia AI Investment masih setengah-setengah. <br />Atau mungkin juga karena perusahaan yang entitas bisnisnya bukan di Indonesia. On that notes, jika kontraknya tidak cukup jelas, freelancing beda negara cukup berisiko secara perlindungan hukum, makannya dari itu ia terkena layoff.<br /><br /> Anggaplah AI akan menggantikan pekerjaanmu. Apa yang akan kamu lakukan? Menurunkan harga jasamu serendah mungkin agar perusahaan tetap memilihmu dibanding AI? Atau, bertransisi ke jenis pekerjaan yang sulit digantikan oleh AI?

<br /><br /> Jika kamu adalah sebuah produk, apa yang akan kamu lakukan? Menyesuaikan diri agar sesuai dengan kebutuhan pasar? Atau tetap mengikuti passion meskipun itu akan sulit?`,
    },
  },
  {
    id: 1,
    title: {
      en: "Maximize Assets, Avoid Inflation",
      id: "Maksimalkan Aset, Hindari Inflasi",
    },
    excerpt: {
      en: "In my opinion, one of the best ways to stabilize asset value and protect money from inflation is by...",
      id: "Menurut saya, salah satu cara terbaik untuk menstabilkan nilai aset dan melindungi uang dari inflasi adalah...",
    },
    content: {
      en: `In my opinion, one of the best ways to stabilize asset value and protect money from inflation is by purchasing gold. Historically, gold prices tend to rise every year, making it an excellent choice for preserving the value of passive, unused assets. On the other hand, keeping money in a bank can result in its value decreasing due to inflation. <br /><br />
What about investing in stocks or cryptocurrencies? In my view, before starting to invest in these instruments, there are several important steps to complete. The first step is to ensure that daily necessities and urgent desires are fulfilled. Next, move to the second step, which is saving and setting aside an emergency fund for unexpected needs. The third step is preparing a minimum investment capital, for instance, IDR 50 million. Once these three steps are met, we can consider investing in stocks or cryptocurrencies.<br /><br />
Stocks are more suitable for long-term investments, especially if you have substantial capital, as they tend to provide more stable returns over time. On the other hand, cryptocurrency is more appropriate for short-term investments or trading due to its high volatility, which requires in-depth understanding and proper risk management.<br /><br />
However, if you find it difficult to fulfill these three steps, I recommend investing in yourself first. This investment could take the form of education, courses, or training to enhance your skills. With new skills, you can open greater opportunities to increase asset value in a more measurable and sustainable way.`,
      id: `Menurut saya, salah satu cara terbaik untuk menstabilkan nilai aset dan melindungi uang dari inflasi adalah dengan membeli emas. Jika kita melihat data historis, harga emas cenderung naik setiap tahun, sehingga sangat cocok digunakan untuk menjaga nilai aset pasif yang tidak terpakai. Sebaliknya, menyimpan uang di bank bisa menyebabkan nilainya berkurang karena tergerus inflasi. <br /><br />
Bagaimana dengan investasi di saham atau cryptocurrency? Menurut saya, sebelum memulai investasi di dua instrumen tersebut, ada beberapa langkah penting yang perlu dipenuhi. Langkah pertama adalah memastikan kebutuhan sehari-hari dan keinginan mendesak sudah terpenuhi. Setelah itu, masuk ke langkah kedua, yaitu menabung dan menyisihkan dana darurat untuk keperluan tak terduga. Langkah ketiga adalah mempersiapkan modal investasi minimal, misalnya Rp50 juta. Jika ketiga langkah tersebut sudah terpenuhi, barulah kita bisa mempertimbangkan investasi saham atau cryptocurrency.<br /><br />
Saham lebih cocok untuk investasi jangka panjang, terutama jika anda memiliki modal yang cukup besar, karena hasilnya cenderung lebih stabil dalam jangka waktu yang lama. Di sisi lain, cryptocurrency lebih cocok untuk investasi jangka pendek atau trading karena volatilitasnya yang tinggi, sehingga membutuhkan pemahaman mendalam dan manajemen risiko yang baik.<br /><br />
Namun, jika anda kesulitan memenuhi tiga langkah tersebut, saya sarankan untuk berinvestasi pada diri sendiri terlebih dahulu. Investasi ini bisa berupa pendidikan, kursus, atau pelatihan untuk meningkatkan keterampilan anda. Dengan keterampilan tersebut, anda dapat membuka peluang lebih besar untuk meningkatkan nilai aset atau income anda dengan cara yang lebih terukur dan berkelanjutan.`,
    },
  },
  {
    id: 6,
    title: {
      en: "Public Speaking is a Powerful Skill",
      id: "Public Speaking adalah Keterampilan yang Kuat",
    },
    excerpt: {
      en: "In the company where I work, there’s one figure who always stands out—our CEO. He isn’t a graduate...",
      id: "Di perusahaan tempat saya bekerja, ada satu sosok yang selalu menarik perhatian saya—CEO kami. Beliau bukanlah lulusan...",
    },
    content: {
      en: `In the company where I work, there’s one figure who always stands out—our CEO. He isn’t a graduate of a prestigious university, just a vocational school alumnus. Yet, what makes him remarkable is his outstanding public speaking skills.
<br/><br/>
When he speaks to the team or during major meetings, there’s something about the way he delivers ideas that captures everyone’s attention. His words are simple yet always on point. Through effective public speaking, he has been able to convince key stakeholders, build strong relationships, and open opportunities—even at the government and ministerial levels.
<br/><br/>
He often shares that his public speaking ability is something he developed intentionally. “You don’t need to be an expert at everything,” he once said, “but if you can communicate effectively, you can build trust, convey your ideas clearly, and open many doors.”
<br/><br/>
His story makes me reflect. Public speaking isn’t just about talking, it’s about confidently delivering a message, building connections, and influencing others. It’s not a skill everyone possesses, but as our CEO has shown, it’s something you can learn.
<br/><br/>
For me, public speaking is one of the skills I aspire to master. Watching how our CEO uses this ability to drive the company forward is a great source of inspiration. It reminds me that, in many cases, words delivered effectively can be the most powerful tool to achieve success.`,
      id: `Di perusahaan tempat saya bekerja, ada satu sosok yang selalu menarik perhatian saya—CEO kami. Beliau bukanlah lulusan universitas ternama, hanya seorang lulusan SMK. Namun, yang membuatnya istimewa adalah kemampuan public speaking-nya yang luar biasa.
<br/><br/>
Ketika beliau berbicara di depan tim atau dalam rapat besar, ada sesuatu dalam cara beliau menyampaikan ide yang membuat semua orang mendengarkan. Bahasanya sederhana, tetapi selalu tepat sasaran. Dengan public speaking yang baik, beliau mampu meyakinkan banyak pihak, membangun hubungan yang kuat, dan membuka peluang kerja sama, bahkan hingga ke level pemerintahan dan kementerian.
<br/><br/>
Beliau sering berbagi cerita bahwa kemampuan berbicara di depan umum adalah keterampilan yang ia pelajari dengan penuh kesadaran. “Kamu tidak perlu pintar dalam segala hal,” katanya suatu hari, “Tapi kalau kamu bisa berbicara dengan baik, kamu bisa membangun kepercayaan, menyampaikan ide dengan jelas, dan itu membuka banyak pintu.”
<br/><br/>
Cerita beliau membuat saya berpikir. Public speaking ternyata bukan hanya tentang berbicara, tetapi juga tentang menyampaikan pesan dengan percaya diri, membangun hubungan, dan memengaruhi orang lain. Ini bukan kemampuan yang dimiliki semua orang, tetapi saya percaya, seperti yang CEO kami tunjukkan, itu adalah keterampilan yang bisa dipelajari.
<br/><br/>
Bagi saya, public speaking adalah salah satu keterampilan yang ingin saya kuasai. Melihat bagaimana CEO kami memanfaatkan kemampuan ini untuk membawa perusahaan maju adalah inspirasi besar. Ini mengingatkan saya bahwa dalam banyak hal, kata-kata yang disampaikan dengan baik dapat menjadi alat yang paling kuat untuk meraih kesuksesan.`,
    },
  },
  {
    id: 2,
    title: {
      en: "Energy Is Too Expensive for a Bad Investments",
      id: "Energi Terlalu Berharga untuk Diinvestasikan pada Hal yang Salah",
    },
    excerpt: {
      en: "Energy is one of the most valuable assets everyone possesses, surpassing money or time, because...",
      id: "Energi adalah salah satu aset paling berharga yang semua orang miliki, lebih dari uang atau waktu, karena...",
    },
    content: {
      en: `Energy is one of the most valuable assets everyone possesses, surpassing money or time, because it encompasses various aspects such as physical, mental, emotional, and spiritual dimensions. As a finite resource, energy must be managed and utilized wisely, directed toward activities that add value to life. Using it on aimless conflicts, toxic relationships, or meaningless activities becomes a bad investment that only harms oneself. <br/><br/>
Like money, energy should be strategically allocated to gain maximum benefits, such as learning new skills, maintaining health, or building positive relationships. To avoid unnecessary energy consumption, it is important to steer clear of futile efforts, such as trying to please everyone or dwelling on past regrets. Instead, focus on priorities that support personal growth and long-term goals. Sometimes, conserving energy through rest or quiet reflection is the best approach. When energy is channeled positively to create something meaningful or to help others, the results often exceed expectations and attract more good into life. Therefore, do not waste your energy on things that do not bring value, use it wisely as the best investment for a better future.`,
      id: `Energi adalah salah satu aset paling berharga yang semua orang miliki, lebih dari uang atau waktu, karena energi mencakup beberapa hal seperti fisik, mental, emosional, dan spiritual. Sebagai sumber daya yang terbatas, energi perlu dikelola dan dimanfaatkan dengan bijaksana dan diarahkan pada hal-hal yang memberikan nilai tambah dalam hidup. Menggunakannya untuk konflik tanpa arah, hubungan yang toxic, atau aktivitas yang tidak bermakna hanya akan menjadi investasi buruk yang merugikan diri sendiri. <br /><br />
Sama seperti uang, energi harus dialokasikan secara strategis untuk mendapatkan manfaat maksimal, seperti belajar keterampilan atau hal baru, menjaga kesehatan, atau membangun hubungan positif. Untuk menghindari pemakaian energi yang tidak perlu, penting untuk menjauhkan diri dari upaya yang sia-sia, seperti mencoba menyenangkan semua orang atau terjebak pada penyesalan masa lalu. Sebaliknya, fokuslah pada prioritas yang mendukung pertumbuhan pribadi dan tujuan jangka panjang. Kadang, menyimpan energi melalui istirahat atau keheningan adalah langkah terbaik. Ketika energi digunakan secara positif untuk menciptakan sesuatu yang bermakna atau membantu orang lain, hasilnya sering kali melampaui ekspektasi dan menarik lebih banyak hal baik dalam hidup. Maka, jangan menyia-nyiakan energi pada hal-hal yang tidak membawa manfaat, gunakanlah secara bijak sebagai investasi terbaik untuk masa depan yang lebih baik.`,
    },
  },
  {
    id: 8,
    title: {
      en: "Everything Start with a Thought",
      id: "Segalanya Bermula dari Pikiran",
    },
    excerpt: {
      en: "Some people, when trying to achieve their goals—whether small or big—often feel afraid to take a step forward...",
      id: "Beberapa orang, ketika mencoba meraih tujuan, baik itu dalam hal kecil maupun besar, seringkali merasa takut untuk melangkah...",
    },
    content: {
      en: `Some people, when trying to achieve their goals—whether small or big—often feel afraid to take a step forward. They get stuck in a pessimistic mindset, thinking, <i>"I can’t do this,"</i> <i>"This is impossible,"</i> or <i>"This is too difficult."</i> If someone continues to think this way, their goals will likely remain unattainable. One approach worth considering is the principle of <i>"Fake it till you make it"</i> which means convincing yourself that you are capable. Success always begins with thoughts: thoughts become actions, actions become habits, habits shape your lifestyle, and lifestyle defines your destiny. In Islam, there is no room for pessimism, and we are reminded not to dwell on negative conclusions like <i>"This is impossible."</i> Instead, we are encouraged to believe that with effort and faith, anything is achievable.`,
      id: `Beberapa orang, ketika mencoba meraih tujuan atau sebuah goals, baik itu dalam hal kecil maupun besar, seringkali merasa takut untuk melangkah. Mereka terjebak dalam pola pikir pesimis yang menyatakan, <i>"Aku sudah tidak bisa," </i> <i>"Ini tidak mungkin,"</i> atau <i>"Ini terlalu sulit."</i> Jika seseorang terus-menerus berpikir seperti itu, maka kemungkinan besar tujuan tersebut tidak akan pernah tercapai. Salah satu solusi yang patut dipertimbangkan adalah prinsip <i>"Fake it till you make it"</i> yang berarti membangun keyakinan dalam diri sendiri bahwa kamu mampu. Semua keberhasilan bermula dari pikiran. Pikiran menjadi tindakan, tindakan menjadi kebiasaan, kebiasaan membentuk gaya hidup, dan gaya hidup menentukan takdirmu. Dalam Islam, tidak ada tempat untuk pesimisme, dan kita dianjurkan untuk tidak larut pada sebuah vonis negatif seperti, <i>"Ini tidak mungkin."</i> Sebaliknya, kita diajarkan untuk percaya bahwa dengan usaha dan keyakinan, segala sesuatu bisa diwujudkan.`,
    },
  },
  {
    id: 7,
    title: {
      en: "The Best Way to Learn",
      id: "Cara Terbaik untuk Belajar",
    },
    excerpt: {
      en: "Learning is a lifelong process, and everyone has their own approach to gaining knowledge. In my opinion...",
      id: "Belajar adalah proses yang tidak pernah berhenti, dan setiap orang memiliki caranya sendiri untuk menyerap ilmu. Namun, menurut saya...",
    },
    content: {
      en: `Learning is a lifelong process, and everyone has their own approach to gaining knowledge. In my opinion, there are three best ways to learn that can be applied in different situations.
<br /><br />
First, learn whenever curiosity strikes. When you encounter something intriguing or unfamiliar, even if it’s outside your field, don’t hesitate to explore it. Curiosity is the gateway to knowledge. Exploring new things beyond your comfort zone can expand your horizons and provide richer perspectives.
<br /><br />
Second, learn from things you love or are passionate about. When you’re passionate about something, you’ll happily spend time delving into it without feeling forced. Learning through passion is not only enjoyable but also helps you achieve a deeper understanding because of your strong intrinsic motivation.
<br /><br />
Third, learn the things you need, even if you don’t particularly like them. Not everything we need to learn is exciting, but it’s often essential to achieve long-term goals. For instance, school or college subjects that may seem dull can become crucial foundations for your future career or life. Developing the discipline to learn what’s necessary teaches perseverance and responsibility.
<br /><br />
By combining curiosity, passion, and necessity, you can create a balanced and effective learning approach. Each of these methods plays a unique role, and applying them can make learning a more meaningful journey.`,
      id: `Belajar adalah proses yang tidak pernah berhenti, dan setiap orang memiliki caranya sendiri untuk menyerap ilmu. Namun, menurut saya, ada tiga cara terbaik untuk belajar yang bisa diterapkan dalam berbagai situasi.
<br /><br />
Pertama, belajarlah ketika rasa penasaran muncul. Saat kamu menemukan sesuatu yang menarik atau tidak kamu mengerti, meskipun itu di luar bidangmu, jangan ragu untuk mengeksplorasi. Rasa ingin tahu adalah pintu pertama menuju pengetahuan. Mempelajari hal-hal baru di luar zona nyaman bisa memperluas wawasan dan memberikan perspektif yang lebih kaya.
<br /><br />
Kedua, belajarlah dari hal-hal yang kamu sukai atau yang kamu passion tentangnya. Ketika kamu mencintai sesuatu, kamu akan dengan senang hati menghabiskan waktu mendalaminya tanpa merasa terpaksa. Belajar melalui passion tidak hanya menyenangkan, tetapi juga membantu kamu mencapai tingkat pemahaman yang lebih dalam karena motivasi intrinsik yang kuat.
<br /><br />
Ketiga, belajarlah hal-hal yang kamu perlukan, bahkan jika kamu tidak menyukainya. Tidak semua yang perlu dipelajari itu menarik, tapi sering kali penting untuk menunjang tujuan jangka panjangmu. Contohnya, pelajaran di sekolah atau kuliah yang tampaknya membosankan, bisa menjadi bekal untuk karier atau kehidupan di masa depan. Disiplin dalam belajar hal-hal yang diperlukan mengajarkan ketekunan dan tanggung jawab.
<br /><br />
Dengan menggabungkan rasa penasaran, passion, dan kebutuhan, kamu bisa menciptakan pola belajar yang seimbang dan efektif. Setiap pendekatan ini punya perannya masing-masing, dan dengan menerapkannya, belajar akan menjadi perjalanan yang lebih bermakna.`,
    },
  },
  {
    id: 3,
    title: {
      en: "Networking is a Crucial Aspect of Building a Career",
      id: "Networking adalah Aspek Krusial dalam Membangun Karir",
    },
    excerpt: {
      en: "Networking is one of the most crucial aspects of building a career. More than just exchanging names or connections...",
      id: "Networking adalah salah satu aspek krusial dalam membangun sebuah karir. Lebih dari sekadar bertukar nama atau koneksi...",
    },
    content: {
      en: `Networking is one of the most crucial aspects of building a career. More than just exchanging names or connections on social media, networking is about creating meaningful relationships with people who can provide insights, opportunities, or even inspiration. In a competitive professional world, a strong network can open doors that might not be accessible through technical skills alone. Through networking, we can learn from others' experiences, gain information about industry trends, or even find mentors who help us reach our maximum potential in our chosen field. Therefore, investing time and energy in building and maintaining professional relationships not only enhances career opportunities but also enriches our knowledge. Networking is truly a form of long-term investment.`,
      id: `Networking adalah salah satu aspek krusial dalam membangun sebuah karir. Lebih dari sekadar bertukar nama atau koneksi di media sosial, networking adalah tentang menciptakan hubungan bermakna dengan orang-orang yang dapat memberikan wawasan, peluang, atau bahkan inspirasi. Dalam dunia kerja yang kompetitif, jaringan yang baik dapat membuka pintu yang mungkin tidak bisa diakses hanya dengan keterampilan teknis. Melalui networking, kita dapat belajar dari pengalaman orang lain, mendapatkan informasi tentang tren industri, atau bahkan menemukan mentor yang membantu kita mencapai potensi maksimal dibidang yang sedang kita geluti. Oleh karena itu, investasi waktu dan energi untuk membangun serta menjaga hubungan profesional tidak hanya meningkatkan peluang karir, tetapi juga memperkaya ilmu. Networking adalah salah satu bentuk investasi jangka panjang.`,
    },
  },
  {
    id: 5,
    title: {
      en: "Love's make everything possible",
      id: "Cinta membuat segalanya menjadi mungkin",
    },
    excerpt: {
      en: "Love is like passive fuel, yet it holds an extraordinary power to make anything possible...",
      id: "Cinta itu seperti bahan bakar pasif, namun memiliki kekuatan luar biasa untuk membuat segala hal menjadi mungkin...",
    },
    content: {
      en: `Love is like passive fuel, yet it holds an extraordinary power to make anything possible. It’s not just about romantic relationships, but also about loving the passion behind what we do. When we work, learn, or pursue something wholeheartedly, love flows into the results. Every task feels lighter, every obstacle becomes a lesson, and every achievement feels more meaningful. Love for the work or activities we do, when rooted in sincerity, will undoubtedly bear sweet fruit in the end. <br/><br/>

However, love in the context of relationships is no less impactful. I once observed a friend of mine who was in love. Their face seemed brighter, filled with happiness. The burdens of life appeared to lift away, leaving them more at peace—even their quality of sleep improved. It made me reflect on how profoundly love can influence our daily lives. <br/><br/>
Love is simple yet magical. It transforms pressure into motivation, sadness into strength, and routines into stories full of meaning. When love is present—whether in work or relationships—we become the best version of ourselves, ready to face the world with greater joy and hope. Even though the path isn’t always smooth, love teaches us that the journey itself is part of the magic.<br/><br/>

`,
      id: `Cinta itu seperti bahan bakar pasif, namun memiliki kekuatan luar biasa untuk membuat segala hal menjadi mungkin. Bukan hanya tentang hubungan romantis, tetapi juga mencintai passion yang kita lakukan. Ketika bekerja, belajar, atau menjalani sesuatu dengan sepenuh hati, cinta tersebut mengalir ke dalam hasilnya. Setiap tugas terasa lebih ringan, setiap hambatan menjadi pelajaran, dan setiap pencapaian terasa lebih bermakna. Cinta pada pekerjaan atau kegiatan yang kita lakukan, jika dilandasi ketulusan, pasti akan berbuah manis pada akhirnya. <br/><br/>

    Namun, cinta dalam artian hubungan juga tak kalah berpengaruh. Saya pernah melihat teman saya yang sedang jatuh cinta. Wajahnya terlihat lebih cerah, penuh dengan kebahagiaan. Beban hidupnya seakan terangkat, dan ia menjadi lebih damai, bahkan kualitas tidurnya menjadi lebih baik. Hal itu membuat saya berpikir, betapa besar dampak cinta terhadap keseharian kita. <br/><br/>
    Cinta itu sederhana namun ajaib. Ia mengubah tekanan menjadi dorongan, kesedihan menjadi kekuatan, dan rutinitas menjadi cerita penuh makna. Ketika cinta hadir, baik dalam pekerjaan maupun hubungan, kita menjadi versi terbaik dari diri kita sendiri, siap menghadapi dunia dengan lebih ceria dan penuh harapan. Meski jalannya tak selalu mulus, cinta mengajarkan kita bahwa perjalanan itu sendiri adalah bagian dari keajaiban. <br/><br/>
    `,
    },
  },
];

export default function Stories() {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [storyLanguages, setStoryLanguages] = useState<{
    [key: number]: "en" | "id";
  }>({});

  const toggleStory = (id: number) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  const toggleLanguage = (storyId: number) => {
    setStoryLanguages((prev) => ({
      ...prev,
      [storyId]: prev[storyId] === "id" ? "en" : "id",
    }));
  };

  const getCurrentLanguage = (storyId: number): "en" | "id" => {
    return storyLanguages[storyId] || "en";
  };

  return (
    <section className="py-16 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* <h2 className="text-3xl font-light mb-12 text-center">Yapping</h2> */}
        <div className="space-y-8">
          {stories.map((story) => {
            const currentLang = getCurrentLanguage(story.id);
            return (
              <article
                key={story.id}
                className="bg-card border border-border rounded-lg px-6 pb-8 pt-4 shadow-sm hover:shadow-md dark:shadow-white/5 dark:hover:shadow-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-end mb-5">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <button
                      onClick={() => toggleLanguage(story.id)}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 text-sm"
                    >
                      <span
                        className={`transition-opacity ${currentLang === "en"
                            ? "opacity-100 font-medium"
                            : "opacity-60"
                          }`}
                      >
                        EN
                      </span>
                      <div className="w-8 h-4 bg-border dark:bg-black rounded-full relative">
                        <div
                          className={`absolute top-0.5 w-3 h-3 bg-foreground rounded-full transition-transform duration-200 ${currentLang === "id"
                              ? "translate-x-4"
                              : "translate-x-0.5"
                            }`}
                        />
                      </div>
                      <span
                        className={`transition-opacity ${currentLang === "id"
                            ? "opacity-100 font-medium"
                            : "opacity-60"
                          }`}
                      >
                        ID
                      </span>
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-normal mb-4 leading-tight">
                  {story.title[currentLang]}
                </h3>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p
                    className="text-muted-foreground leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html:
                        expandedStory === story.id
                          ? story.content[currentLang]
                          : story.excerpt[currentLang],
                    }}
                  ></p>
                </div>

                <button
                  onClick={() => toggleStory(story.id)}
                  className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors duration-200 group"
                >
                  <span className="font-medium">
                    {expandedStory === story.id
                      ? currentLang === "en"
                        ? "Show Less"
                        : "Tampilkan Lebih Sedikit"
                      : currentLang === "en"
                        ? "Read More"
                        : "Baca Selengkapnya"}
                  </span>
                  <ChevronRight
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${expandedStory === story.id
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                      }`}
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
