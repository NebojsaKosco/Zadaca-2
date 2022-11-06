//definisanje niza
var niz=[25,23,5665,676,54,768,456,878,2,5,4,86,54,898,98,657,787,767,675,435,4354,];

//definisanje mjesta gdje ce se ispisavti vrijednosti u htmlu. napravljena tabela. 
var mojaTabela=document.getElementById("tabela");
var dodavanje=mojaTabela.innerHTML;
//ispisivanje clanova niza na ekran prvo
function ispisNiz(){
    for (var i=0; i<niz.length;i++){
        mojaTabela.innerHTML+="<tr><td>"+niz[i]+ "</td></tr>"
    }
}
//poziv funkcije
ispisNiz()

function ispis(){
    mojaTabela.innerHTML=dodavanje;

}


/*Pise u zadatku da treba biti opcija return koja vraca vrijednost, proucit cu pa cu pokusati sve uraditi tako da vraca vrijednost u metodu neku preko koje se sve ispisuje
nisam siguran kako tacno ide. Ostalo sam sve sam uradio uz male podsjete pokusao sam napraviti unos niza ali mi nesto nije to radilo moram dopraviti 
ispis u tabeli. malo sam css-a stavio da je preglednije i ljepse izlgeda cisto onako. 
*/

//zadatak 2a rayvrstavanje parnih i neparnih. 
function parnost(){
    mojaTabela.innerHTML+="<tr><th>"+'Parni brjevi su: '+ "</th></tr>"
    for (var i=0; i<niz.length;i++){
        if(niz[i]%2==0){
            mojaTabela.innerHTML+="<tr><td>"+niz[i]+ "</td></tr>"
            
        }
    }
}
parnost()

//zadatak 2b sume parnih i neparnih brojeva 
function sume(){
    var sumaParni=0;
    var sumaNeparnih=0;
    for (var i=0; i<niz.length;i++){
        if(niz[i]%2==0){
            sumaParni=sumaParni+niz[i];
            
        }else{
            sumaNeparnih=sumaNeparnih+niz[i];
        }
    }
    mojaTabela.innerHTML+="<tr><th>"+'Suma parnih je: '+'<br>'+"</th></tr>"
    mojaTabela.innerHTML+="<tr><td>"+sumaParni+"</td></tr>"
    mojaTabela.innerHTML+="<tr><th>"+'Suma neparnih je: '+"</th></tr>"
    mojaTabela.innerHTML+="<tr><td>"+ sumaNeparnih+"</td></tr>"
}
sume();

//zadatak 2c ispis prostih projeva ovjde mi nije bas nabolji zadatak nisam siguran sta tacno nije dobro ali ispis nije oke skroz, pokusacu popraviti 
function prostiBrojevi(){
    mojaTabela.innerHTML+="<tr><th>"+ 'Prosti brojevi su: '+"</th></tr>"
    var pro=false;
    for (var i=0; i<niz.length;i++){
        for (var j=2; j<niz[i]/2; j++){
               if (niz[i]/j==pro){
                   break
            }else{
                    console.log(niz[i])
               }




                
            }
        }
    }


prostiBrojevi();

//zadatak 2d ispis brojeva sa neparnim indeksima ispisao sam brojeve i onda sam i indekse njihove 
function neparniIndeksi(){
    mojaTabela.innerHTML+="<tr><th>"+'Brojevi sa neparnim indeskima su: '+"</th></tr>"
    for(var i=0; i<niz.length;i++){
        if(i%2==1){
            mojaTabela.innerHTML+="<tr><td>"+niz[i]+ ' , a njihovi indeksi su: '+i+"</td></tr>"
        }
    }
}

neparniIndeksi()




// zadatak 1e ispis sortiranog niza od manjeg ka vecem dio koda sam na netu nasao ovo ste Stanic i ti spominjali
function sortSort(){
    mojaTabela.innerHTML+="<tr><th>"+'Niz sortiran od manjeg do veceg: '+"</th></tr>"
    for(var i=0;i<niz.length ;i++){
        
        niz=niz.sort(function (a, b) {  return a - b;  });

        mojaTabela.innerHTML+="<tr><td>"+niz[i]+"</td></tr>"

    }

}
sortSort()

//zadatak 2e ispis kontra od zadatka 1e samo mjenjamo mjesta koeficijenata a i b tako ste vi rekli bili na casu jednom, i petlju sam popravio da drugacije cita
function sortSortBA(){
    mojaTabela.innerHTML+="<tr><th>"+'Niz sortiran od veceg do manjeg: '+"</th></tr>"
    for(var i=niz.length-1;i>=0 ;i--){
        
        niz=niz.sort(function (b, a) {  return b - a;  });

        mojaTabela.innerHTML+="<tr><td>"+niz[i]+"</td></tr>"

    }

}
sortSortBA()


//yadatak 2f i 1f nisam siguran da se mislilo ovako ali sam uradio sa dvije for petlje koje drugacije ispisuju elemente po indeksima i tako sam postigao neki random ispis bez ugradjene funkcije
function randomSort(){
    mojaTabela.innerHTML+="<tr><th>"+'Novi niz slucajno sortiran je: '+"</th></tr>"
    for (var i=0; i<niz.length;i+=2){
        mojaTabela.innerHTML+="<tr><td>"+niz[i]+"</td></tr>"
    }
    for (var j=1; j<niz.length;j+=2){
        mojaTabela.innerHTML+="<tr><td>"+niz[j]+"</td></tr>"
    }
    
}
randomSort()

//zadatak 1a klasika dvocifreni brojevi uslov veci od 9 manji od 100 i ispis takvih brojeva 
function dvocifreniBrojevi(){
    mojaTabela.innerHTML+="<tr><th>"+'Dvocifreni brojevi su: '+"</th></tr>" 
    for(var i=0;i<niz.length;i++){
        if(niz[i]>9 && niz[i]<100){
            mojaTabela.innerHTML+="<tr><td>"+niz[i]+"</td></tr>"        
        }
    }
}
dvocifreniBrojevi()

//zadatak 1b klasika prolazak kroz nis i sabiranje i cuvanje vrijednosti u variabli zbirClanova onda ar sredina izracunata iz zibra clanova i velicine niza.
function arSredinaNiza(){
    var zbirClanova=0;
    var arSredina=0;
    for( var i=0;i<niz.length;i++ ){
        zbirClanova=zbirClanova+niz[i];
        arSredina=zbirClanova/niz.length;
        
    }
    mojaTabela.innerHTML+="<tr><th>"+'Aritmeticka sredina je: '+"</th></tr>" 
    mojaTabela.innerHTML+="<tr><td>"+arSredina+"</td></tr>" 

}
arSredinaNiza()

//zadatak 1c pokusao sam sa ugradjenom funkcijom reverse ali ona ne radi bas kako treba, na kraju sam ovo nasao nisam siguran kako radi ali radi
function palindromi(){
    mojaTabela.innerHTML+="<tr><th>"+'Palindromi su: '+"</th></tr>" 

    for (var i=0; i<niz.length;i++){
        var ns=parseFloat(
            niz[i]
              .toString()
              .split('')
              .reverse()
              .join('')
          ) * Math.sign(niz[i])
     if(ns==niz[i]){
        mojaTabela.innerHTML+="<tr><td>"+niz[i]+"</td></tr>"
       
     }

    }
}

palindromi()

//zadatak 1d nije tezak isti kao sa neparnim samo razlika u granjanju if ostatak je nula na parnim a neparnim jedan.
function parniIndeksi(){
    mojaTabela.innerHTML+="<tr><th>"+'Brojevi sa parnim indeskima su: '+"</th></tr>"
    for(var i=0; i<niz.length;i++){
        if(i%2==0){
            mojaTabela.innerHTML+="<tr><td> " + niz[i]+ ' , a njihovi indeksi su: '+i+"</td></tr>"
        }
    }
}

parniIndeksi()
