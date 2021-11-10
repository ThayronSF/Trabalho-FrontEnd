function ProcessarIEA()
{
   let [mc,ie,ip] = getvalIEA();
   let iea = calciea(mc,ie,ip);
   publicariea (iea);
}
function getvalIEA()
{
    let mc = document.getElementById("edtMC");
    let ie = document.getElementById("edtIE");
    let ip = document.getElementById("edtIP");
    console.log(mc);
    console.log(ie);
    console.log(ip);
    return [mc.value,ie.value,ip.value]
}
function calciea(mc,ie,ip)
{
    let indiea = mc*ie*ip;
    console.log(indiea);
    return indiea;
}
function publicariea(iea)
{
    let ap = document.getElementById ("resposta")
    let textresp = document.createElement ("p");
    textresp.append (iea);
    ap.appendChild(textresp);

}