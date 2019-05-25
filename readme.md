# React Native 

## Introdução

<p>React é uma biblioteca que surgiu em 2011, pelo Facebook.</p>
<p>React é uma biblioteca javascript, ou seja é uma coleção de funcionalidades relacionadas que podem ser chamadas pelo desenvolver para resolver problmeas específicos - a criação de interfaces de usúario reaproveitáveis.</p>
<p>Diferente de um framework que diga o que (e como) algo deve ser feito.</p>
<p>Toda construção é efetuada com javascript. existe uma similaridade entre a definição de estilos com css e a definição de seus elementos com html, entretanto, toda a construção do mesmo é efetuada em javascript.</p>
<p>Flux e Redux maneiras de pensar o desenvolvimento.</p>

### react (DOM) vs react native

<p>O que o react em si faz, basicamente ele fala como a interface é organiza em uma estrutura de memoria e como será gerenciado eventos na interface.</p>
<p>Você tem então o react para web (DOM) ele irá pegar essa interface essa estrutura que foi declara e irá colocar ele para web, enquanto o react native irá pegar essa interface e irá colocar (converte) para aplicações mobile.</p>
<p>Então o que é o legal do react, no momento que você aprende a manipular a interface e organizar e trabalhar seus eventos, você consegue fazer isso tanto para web quanto para mobile, a diferença basicamente será o componente que será chamado exemplo, para apresentar um texto no react native você utiliza o elemento `<Text></Text>` enquanto para web você irá utilizar um elemento `<p></p>`.</p>
<p>O maior objetivo dele é implantar o conceito de uma plataforma learn-once run-anywhere (aprenda uma vez e execute em qualquer lugar), isto é, uma vez aprendidos os conceitos do React, os mesmos podem ser transcritos para qualquer linguagem de programação, tal como funciona com a lógica de programação.</p>

 ````jsx harmony
 class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <p>Shopping List for {this.props.name}</p>
      </div>
    );
  }
}
 ````
 ````jsx harmony
 class ShoppingList extends React.Component {
  render() {
    return (
      <View>
        <Text>Shopping List for {this.props.name}</Text>
      </View>
    );
  }
}
 ````

### Motivos para aprender React
* Construir aplicações web e aplicações mobile;
* Linguagem pupular (https://bestofjs.org/tags/framework);
* Alta gama de componentes;
* Construção nativa;
* Grandes Player;

### Mercado de trabalho (biscoto Vs bolacha)

#### Web
* Angular
* React
* Vuejs

#### Mobile

* ionic (angular, vue, webview)
* react-native (facebool, native, virtual DOM, js)
* flutter (google)
* xamarin (miscrosft, C#, ddl curva de aprendizado)
  * vue-native

<p>(Web View, ele é um navegador, sem a barra de busca)
(Ele utiliza uma biblioteca para renderização de componentes, e usando ela ele joga componentes nativos (brigth))</p>

## Prática

### Requisitos de instalação
* Java (Jdk) e Python
* NodeJs e NPM
* Android Studio (Android) e React Native Cli
```shell
npm install -g react-native-cli
```

### Iniciando um projeto
* react-native init <nome_do_app>
* cd <nome_do_app>
* react-native start
* react-native run-android

### Formas para atualizar a aplicação 

#### Rodando no simulador do android
* ctrl + m (acessar painel do react)
* Reload (painel do react)(rodar novamente)
* Debug js Remotely (painel do react)(debug para console js)
* Enable/Disable live reload (painel do react)(atualização continua ao salvar um arquivo, atualiza a aplicação)

#### Apartir do adb
* adb shell input keyevent 46 46 (rodar novamente)
* adb shell input keyevent 82 (abrir painel react)

### Javascript
* required
* function
* variveis
* estruturas condicionais
* for , array,
* array (for, map)
* (https://playcode.io/325284?tabs=console&script.js&output)

### Iniciando o desenvolvimento com react native

#### Bibliotecas básicas

* React (liblioteca do react, onde tem a declaração do component)

* React Native (Elemento nativos)

#### Componentes iniciais

* AppRegistry
  * https://facebook.github.io/react-native/docs/appregistry#docsNav
  * Ponto inicial da aplicação
```jsx harmony
AppRegistry.registerComponent(appName, () => App);
```
* https://facebook.github.io/react-native/docs/components-and-apis#docsNav

### JSX

<p>React é uma biblioteca javascript que permite criar interfaces para aplicações web.</p>
<p>O Jsx é uma forma de representar objetos na forma de componentes, sendo sua apresentação semelhante a tags HTML, não é obrigatório o seu uso, entretanto, utiliza-la é muito benefica.</p>

````jsx harmony
<Text>Esse é um objeto criado apartir do JSX</Text>
````

* Babel é o responsável por transpilar o codigo em JSX para javascript e também os recursos utilizado do EcmaScrpit 6 e as novas especificações, para as versões suportadas do javascript.
* https://babeljs.io/
* https://udgwebdev.com/frontend-lindo-usando-babel-para-rodar-es6/

### Estilizando a aplicação (CSS)

<p>Para a estilização de componentes o react-native trabalha com uma abstração similiar a css, entretanto, como já foi dito, react trabalha somente com js, não existindo a separação de css, html e js.</p> 

#### Declarando:
````jsx harmony
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
````

#### Utilizando:
````jsx harmony
<View style={styles.container}>
  <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
</View>
````

##### Flex
* JustifyContent: aplica alinhamento no conteudo de um container (View) verticalmente
  * (flex-end, flex-start, center)
* AlignItems: aplica alinhamento no conteudo de um container (View) horizontal
  * (flex-end, flex-start, center)
* flexDirection: determina a distribuição dos elementos
  * (row, column)
* flex: informa a dimensão do conteiner
  * (1)

### Components (Props) e (State)
* Props: permite que as informações sejam passadas por parametro para o nosso componente
* state: permite a criação de variaveis cujo valor pode ser alterado em qualquer momento na nossa aplicação, para alterar é utilizado a função setState

````jsx harmony
import {View, Text, AppRegistry, Button} from 'react-native';
import React from "react";
import {Component} from 'react';
class MyComponent extends Component {
  render() {
    return (
        <View>
          <Text>{this.props.a}</Text>
        </View>
    );
  }
}

class AlteraTexto extends Component {

  constructor(props) {
    super(props);
    this.state = {text: 'a'};
  }

  changeText() {
    this.setState({text: 'b'});
  }

  render() {
    return (
        <View>
          <MyComponent a={this.state.text} />
          <Button title='Atualizar texto' onPress={() => this.changeText()} />
        </View>
    );
  }
}
AppRegistry.registerComponent('AlteraTexto', () => AlteraTexto);
````

### utilizando gif

* https://facebook.github.io/react-native/docs/image.html
  * Adicionar no arquivo `android/app/build.gradle`
  * implementation 'com.facebook.fresco:animated-gif:1.10.0'


### Utilizando musicas no app

* https://www.npmjs.com/package/react-native-sound
  * npm install react-native-sound --save
  * react-native link react-native-sound

### Navegação entre cenas utilizando o react-Nativagation

<p> React nativagation atualmente é o modelo atual para navegação entre cenas</p>
<p>Exemplo: (https://alligator.io/react/react-native-navigation/</p>

* Instalando:

````shell
npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link react-native-gesture-handler
````

* Criando o componente navigation
````jsx harmony
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Music from "./Music";

const navigation = createStackNavigator(
    {
        Home: {screen: Home},
        Music: {screen: Music},
    },
    {
        initialRouteName: "Home"
    }
);

const AppNavigator = createAppContainer(navigation);

export default AppNavigator;
````

* Adicionando o mesmo no App, sendo adicionado a classe principal do app
````jsx harmony
import React from 'react';
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppNavigator />
        );
    }
}
````

* Criando metodos e variaveis que comunicam-se entre as cenas
````jsx harmony
import React from 'react';
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            music: 'babyshark.mp3',
        }
    }

    changeMusic = (music) => {
        this.setState({music: music});
    };

    render() {
        return (
            <AppNavigator
                screenProps={{
                    music: this.state.music,
                    changeMusic: this.changeMusic,
                }}
            />
        );
    }
}

````

### CLIENT HTTP

<p>Forma de se comunicar com aplicações externas</p>

````shell
npm install --save babel-preset-es2015
npm install --save babel-preset-react
npm install --save axios
````