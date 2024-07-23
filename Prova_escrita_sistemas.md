Nome: Alex Santos
Matrícula: 169622
Curso: Sistemas de Informação

1) Quais as vantagens de utilizar switch ao hub? Por quê?

O switch e o hub são dispositivos de rede usados para interconectar computadores e outros dispositivos em uma rede local (LAN). Ambos têm a função de encaminhar pacotes de dados, no entanto se diferenciam em alguns aspectos.
 A principal vantagem de usar switch ao invés do hub seria a questão do hub transmitir pacotes de dados para todos os dispositivos conectados a ele, se distinguir o destinatário específico, gerando congestionamento e diminuindo o desempenho da rede, já o switch é mais “esperto” e eficiente, pois direciona pacotes apenas ao dispositivo destinatário correto, o que reduz o tráfego desnecessário e melhora a segurança e o desempenho da rede.

2) Explique a função das 5 camadas das redes de computares, e dê exemplos de protocolos utilizados em cada uma delas.

    • Camada de Aplicação: Lida com as necessidades de comunicação das aplicações ou seja da suporte. Exemplo: FTP, SMTP, HTTP, ELNET, FTP, TFTP, SMTP, POP, IMAP, DNS, HTTPS, RTP, MIME e TLS. 
    • Camada de Transporte: Garante a entrega confiável e ordenada dos dados entre dispositivos finais. Exemplo: TCP (padrão que define como estabelecer e manter uma conversa via rede) e UDP (não é orientado à conexão). 
    • Camada de Rede: Fica responsável pelo roteamento e endereçamento de dados. Exemplo: Protocolo IP. 
    • Camada de Enlace: Realiza a transmissão confiável de dados entre dispositivos em uma LAN (a nível físico). Exemplo: PPP e Ethernet. 
    • Camada Física: Movimenta os bits individuais através do meio de transmissão, é responsável por movimentar os bits individuais que estão
dentro de um quadro da camada de enlace. Exemplo: fios, fibra, coaxial. 


3)  Explique como funcionam os cookies e cite duas vantagens e duas desvantagens de sua utilização:

Cookies são arquivos de texto com pequenos fragmentos de dados, usados para identificar um computador em uma rede. Armazenam informações como preferências e login, permitem uma navegação mais personalizada ao usuário. 

Vantagens: Guardam os links que você acessou, conseguem guardar informação da navegação na web, por exemplo, um dorama que você assistiu, quanto tempo ficou nessa página, qual idioma você selecionou ou quais foram as ultimas buscas no site em questão. armazenamento de preferências para personalizar e coleta de dados de comportamento do usuário. 

Desvantagens: Impacto na performance do navegador, cookies mal intencionados roubando informações pessoais e rastreamento de sua atividade online.



4)  Como funciona o HTTP. Qual a diferença entre a conexão persistente e não persistente?
 
O HTTP permite a comunicação entre clientes e servidores na web através de um modelo de requisição-resposta. Em conexões persistentes, uma única conexão TCP é utilizada para múltiplas requisições e respostas, enquanto em conexões não persistentes, uma nova conexão TCP é estabelecida para cada requisição. A HTTP não persistente tem a conexão TCP desfeita ao final da entrega de cada objeto ou seja a conexão não persiste para outros objetos já na HTTP persistente múltiplos objetos podem ser enviados sobre uma mesma conexão TCP (com paralelismo ou sem)

5)  Como funciona o HTTP. Qual a diferença entre a conexão persistente e não persistente? Implemente uma página HTML com cabeçalho (título + metadados) e a seguinte configuração.
