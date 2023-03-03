# Boolean
W JavaScript możemy porównywać wartości poprzez podwójne i potrójne '='. 
`==` oraz `!=` sprawdza róność wartości.  
`===` oraz `!==` sprawdza równość wartości **oraz typów**.
Róznica zachodzi przy porównaniu 1 z '1' czyli liczby ze Stringiem. podwójne == zwróci true, potrójne false, ponieważ nie zgadza się typ. W nowoczesnym JS zastosowanie podójnego = spada do minimum i jego stosowanie uważane jest za złą praktykę. 

# Porównania obiektów i tablic
Porówania obiektów, wyglądających identycznie przez podójne i potrójne = zwóci false. Zachownie podobne do Java. Taka sama sytuacja wystąpi przy porównaniu tablic. Dwie tablice zawierające te same dane, w identycznej kolejności zwrócą false. 

# Truthy oraz Falsy
JavaScript może działać warunkowo z obiektami i zmiennymi. W typ przypadku zprawdzamy czy wartość jest zainicjowana. Jeżeli wartość jest nullem lub undefined otrzymamy false. Zero jest traktowane jako false. 

### Bang operator: !!
zapisując przed wartością truthy albo falsy dwa wykrzykniki, możemy tę wartość przekonwertować na boolean