import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicaçãoIndireta'

export default createDrawerNavigator({

    TextoSincronizado:{
        screen: TextoSincronizado
    },

    Avo:{
    screen:() =><Avo nome='Joao' sobrenome='Silva' />
    },
    Evento:{
        screen: Evento
    },

    ValidarProps:{
        screen:() => <ValidarProps ano={18} />
    },
    Plataformas:{
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8} />,
        navigationOptions:{title: 'Mega Sena'}

    },
    Inverter:{
        screen:() => <Inverter texto='React Nativo!' />
    },
    ParImpar:{
        screen:() => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto='Flexivel!!!' />
    }
}, {drawerWidth:300})