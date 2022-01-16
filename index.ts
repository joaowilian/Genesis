console.log('Funciona agora')

interface IUsuario{
    id: string;
    email: string;

}

interface IAdmin{
    cargo: 'gerente' | 'coordenador' |'supervisor';

}

function redirecinone(usuario: IUsuario | IAdmin){
    if ('cargo' in usuario){
        
    }

}