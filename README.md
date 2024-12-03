# APME - Analisador de Performance de Motores Elétricos - README

## 1. Introdução

Este projeto de APME (Analisador de Performance de Motores Elétricos) visa facilitar o registro das inspeções diárias em motores elétricos de uma indústria. A solução desenvolvida é um site simples e intuitivo que permite aos eletricistas de manutenção registrarem dados de inspeção de forma rápida e segura, gerando relatórios impressos com informações detalhadas.


**Problema Identificado:** Atualmente, o registro das inspeções de motores elétricos é realizado manualmente, o que torna o processo lento, suscetível a erros e dificulta a análise de dados para manutenção preventiva. A falta de um sistema organizado dificulta a rastreabilidade e a identificação de problemas potenciais.

**Solução Proposta:** Um site web que permite aos eletricistas:

* Selecionar o motor a ser inspecionado a partir de um banco de dados pré-cadastrado (contendo modelo, marca e TAG).  Para demonstração, o banco de dados contém apenas 6 modelos de motores elétricos trifásicos em tensão 380V com potências de 15 cv; 12,5 cv; 10 cv; 7,5 cv; 4 cv e 3 cv.
* Preencher um checklist com informações essenciais de operação: potência, tensões e correntes em cada fase, temperatura, presença de vibrações e ruídos nos rolamentos dianteiro e traseiro.
* Comparar os dados de operação com os valores nominais do modelo do motor selecionado.
* Gerar um relatório impresso com os dados da inspeção, incluindo parecer técnico sobre o estado do motor (normal ou anormal para cada item verificado).


## 2. Objetivos do Projeto

**Objetivo Geral:** Criar uma plataforma web para facilitar o registro e a análise das inspeções de motores elétricos, melhorando a eficiência da manutenção e a prevenção de falhas.

**Objetivos Específicos:**

* Desenvolver um site com interface amigável para os eletricistas de manutenção.
* Criar um banco de dados de motores elétricos (limitado a 6 modelos para demonstração da aplicação), contendo informações como modelo, marca e TAG.
* Implementar um checklist digital para coletar os dados de inspeção.
* Implementar a funcionalidade de comparação entre dados de operação e valores nominais.
* Gerar relatórios impressos com informações completas sobre a inspeção e parecer técnico.
* Garantir a segurança e a confiabilidade do registro das informações.


## 3. Justificativa

Este projeto justifica-se pela necessidade de otimizar o processo de inspeção de motores elétricos, reduzindo o tempo gasto, minimizando erros humanos e fornecendo dados estruturados para análise e manutenção preventiva. A solução proposta oferece uma alternativa eficiente e acessível em comparação com sistemas complexos e onerosos. A melhoria da eficiência na manutenção contribui para a redução de custos e tempo de parada da produção.


## 4. Metodologia

* **Levantamento de requisitos:** Definição das funcionalidades do sistema e das informações necessárias nos relatórios.
* **Design e desenvolvimento:** Utilização de tecnologias web para o desenvolvimento do site (tecnologias a serem definidas, ex: HTML, CSS, JavaScript, banco de dados). Consideração de frameworks para agilizar o desenvolvimento.
* **Testes:** Testes unitários e de integração para garantir a funcionalidade e a confiabilidade do sistema. Testes de usabilidade simulados.
* **Implementação e Treinamento:**  Simulação de implementação e treinamento.


## 5. Cronograma 

| Semana | Atividade                                        |
|--------|--------------------------------------------------|
| 1      | Definição de requisitos e escopo                 |
| 2-3    | Design e desenvolvimento da interface do usuário |
| 4-6    | Desenvolvimento do backend e banco de dados      |
| 7-8    | Testes e ajustes                                 |
| 9-10   | Simulação de implementação e treinamento         |


## 6. Resultados Esperados

* Registro digitalizado e organizado das inspeções de motores elétricos.
* Redução do tempo gasto no processo de inspeção (projetado).
* Minimização de erros humanos no registro de dados (projetado).
* Facilidade na análise de dados para manutenção preventiva (projetado).
* Relatórios completos e detalhados para acompanhamento da performance dos motores.
* Melhora na eficiência da manutenção e redução de custos (projetado).


## 7. Conclusão

Este projeto visa entregar uma solução prática e eficiente para melhorar a gestão da manutenção de motores elétricos, utilizando tecnologias web acessíveis e aplicando os conhecimentos adquiridos. A implementação do APME contribuirá para uma operação mais segura, eficiente e sustentável.
