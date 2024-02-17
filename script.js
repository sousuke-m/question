function start(id_1,id_2,id_3){
    const question = {
        math : {
            pulas:[
                [
                    {q:"1 + 1",a:"2"},
                    {q:"4 + 9",a:"13"},
                    {q:"58 + 92",a:"150"},
                    {q:"192 + 8",a:"200"},
                    {q:"1000 + 9",a:"1009"},
                    {q:"4.5 + 0.5",a:"5"},
                    {q:"2.3 + 2.7",a:"5"},
                    {q:"6.54 + 0.46",a:"7"},
                    {q:"1.001 + 0.999",a:"2"},
                    {q:"(-2) + (+1)",a:"-1"},
                ]
            ]
        }
    };
    var q_ = question?.[id_1]?.[id_2][id_3];
    var q_l = q_.length;
    for(let i = 0;i<q_l;i++){
        var ___1 = prompt(`問題${i + 1}:\n${q_[i].q}`);
        if(___1){
            if(___1 == q_[i].a){
                alert('正解');
            }else{
                alert(`不正解\n正解:${q_[i].a}`);
            }
        }else{
            if(confirm(`本当に終了しますか`)){
                return false;
            }else{
                ___1 = prompt(`問題${i + 1}:\n${q_[i].q}`);
                if(___1 == q_[i].a){
                    alert('正解');
                }else{
                    alert(`不正解\n正解:${q_[i].a}`);
                }
            }
        }
    }
}