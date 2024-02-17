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
    var point = 0;
    var ___1 = `Eroor   エラー`;
    for(let i = 0;i<q_l;i++){
        ___1 = prompt(`問題${i + 1}:\n${q_[i].q}`);
        if(___1){
            if(___1 == q_[i].a){
                point += 10;
                alert(`正解\n現在${point}ポイント`);
            }else{
                alert(`不正解\n正解:${q_[i].a}\n現在${point}ポイント`);
            }
        }else{
            if(confirm(`本当に終了しますか\n現在${point}ポイント`)){
                location.hash = `#${point}point`;
                return false;
            }else{
                ___1 = prompt(`[復元済み]\n問題${i + 1}:\n${q_[i].q}\n※キャンセルボタン無効`);
                if(___1 == q_[i].a){
                    point += 10;
                    alert(`正解\n現在${point}ポイント`);
                }else{
                    alert(`不正解\n正解:${q_[i].a}\n現在${point}ポイント`);
                }
            }
        }
    }
    location.hash = `#${point}point`;
}