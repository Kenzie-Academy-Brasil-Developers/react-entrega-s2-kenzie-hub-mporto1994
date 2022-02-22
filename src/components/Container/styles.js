import styled from "styled-components"



export const ContainerS = styled.div`
    width:100vw;
    height:100vh;
    background-color:var(--Grey-4);
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
    >*{
    display:flex;
    flex-direction:column;
    width:296px;
    padding:42px 0px;
    
    }
    > :last-child{
        background-color:var(--Grey-3);
    border-radius:3.2px;
    justify-content:space-around;
    align-items:center;
    margin-top:20px;
    }

    h2{
        color:var(--Grey-0);
        font-size:14.4px;
        font-weight:700;
    }

    form {
    display:flex;
    flex-direction:column;
        
        button{
            color:#FFF;
            background-color:var(--Color-primary);
        }
        input,select,option{
            margin:18px 0px;
            color:var(----Grye-0);
            padding:0px 13px;
        }
    }
    label{
    display:flex;
    flex-direction:column;
    color:var(--Grey-0);
    font-size:10px;
}
    span{
        color:var(--Grey-1);
        font-size:10px;
    }
    button{
        color:var(--Grey-0);
        background-color:var(--Grey-1);
    }
    div{

    }
`