<template><div><h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token operator">&lt;</span>username<span class="token operator">></span> <span class="token operator">=</span> Usuario que tenga acceso al repositorio 

<span class="token function">git</span> clone https://<span class="token operator">&lt;</span>username<span class="token operator">></span>@bitbucket.org/VisaNet_TI/framework-selenium.git
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> framework-selenium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecución GUI</h2>
<p>Ejecución de pruebas a travez de una interfaz web.</p>
<p>Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecución.</p>
<p><img src="/images/ejecucion/gui.png" alt="Ejecución"></p>
<h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecución CLI</h2>
<p>Similar que ejecutar selenium por GUI pero con comando en la terminal favorita</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> framework-selenium

<span class="token comment"># To run scenarios with @debug1 and @debug2:</span>
<span class="token comment"># Old version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dcucumber.options=--tags @debug1 --tags @debug2"</span>

<span class="token comment"># Actual version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dcucumber.options=--tags '@debug1 and @debug2'"</span>

<span class="token comment"># To run scenarios with @debug1 or @debug2:</span>
<span class="token comment">#Old version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dcucumber.options=--tags @debug1, @debug2"</span>

<span class="token comment">#Actual version of Cucumber-jvm:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dcucumber.options=--tags '@debug1 or @debug2'"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2>
<p>Estructura de carpeta del framework trabajado.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>┌─ src
|  └─ main
|     ├─ java
|     |  └─ frontend
|     |     ├─ base
│     |     |  └─ BaseClass.java
|     |     ├─ collections
│     |     |  ├─ api
│     |     |  ├─ model
│     |     |  └─ request
|     |     ├─ helpers
|     |     |  └─ Hook.java
|     |     ├─ listener
|     |     |  └─ Listener.java
|     |     ├─ pages
|     |     |  ├─ objects
|     |     |  └─ pages 
|     |     ├─ runner
|     |     |  └─ Run Test.java
|     |     ├─ steps
|     |     └─ utility
|     |        ├─ ExcelReader.java
|     |        ├─ ExtentReportUtil.java
|     |        ├─ FileHelper.java
|     |        ├─ GenerateWord.java
|     |        ├─ Sleeper.java
|     |        └─ StringHelper.java
|     └─ resources
|        ├─ config
|        |  ├─ extent-config.xml
|        |  └─ testng.xml 
|        ├─ driver
|        |  ├─ chrome
|        |  |  └─ chromedriver.exe
|        |  ├─ firefox
|        |  └─ ie
|        ├─ excel
|        |  └─ data.xlsx
|        ├─ features
|        ├─ template
|        └─ log.properties      
└─ target
   ├─ classes
   ├─ generated-sources
   └─ resultado
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>src/main</td>
<td>Carpeta principal del proyecto</td>
</tr>
<tr>
<td>target</td>
<td>Carpeta donde se genera los reportes html, documento de word</td>
</tr>
</tbody>
</table>
<h4 id="java-frontend" tabindex="-1"><a class="header-anchor" href="#java-frontend" aria-hidden="true">#</a> Java/Frontend</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>base</td>
<td>Especializado para guardar acciones, el automatizador puede crear nuevas acciones de la API de Selenium</td>
</tr>
<tr>
<td>collections</td>
<td>Carpeta especializada para las pruebas de API</td>
</tr>
<tr>
<td>helpers</td>
<td>Especializado para la configuración del driver <code v-pre>browser</code> a utilizar en las pruebas</td>
</tr>
<tr>
<td>listener</td>
<td>Almacena las configuraciones antes, durante y despues de la ejecución de las pruebas</td>
</tr>
<tr>
<td>pages</td>
<td>Especializado para contener funcionalidad de los steps a desarrollar</td>
</tr>
<tr>
<td>steps</td>
<td>Especializado para almacenar los pasos a desarrollar del feature a nivel funcional</td>
</tr>
<tr>
<td>runner</td>
<td>Especializado para la configuración de los casos a ejecutar</td>
</tr>
<tr>
<td>utily</td>
<td>Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creación de reportes, etc.</td>
</tr>
</tbody>
</table>
<h4 id="java-resource" tabindex="-1"><a class="header-anchor" href="#java-resource" aria-hidden="true">#</a> Java/Resource</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>config</td>
<td>Configuraciones especiales del testng y extent report</td>
</tr>
<tr>
<td>driver</td>
<td>Especializado para almacenar los diferentes controladores por navegador</td>
</tr>
<tr>
<td>excel</td>
<td>Especializado para almacer los archivos excel</td>
</tr>
<tr>
<td>feature</td>
<td>Especializado para la creación de <code v-pre>.feture</code> (escenarios en Gherkin)</td>
</tr>
<tr>
<td>template</td>
<td>Configuraciones de plantilla para la generación del Word</td>
</tr>
<tr>
<td>log.properties</td>
<td>Configuraciones de log4j</td>
</tr>
</tbody>
</table>
<h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>classes</td>
<td>Genera la previa configuración del proyecto</td>
</tr>
<tr>
<td>generated-sources</td>
<td>Genera diferentes anotaciones</td>
</tr>
<tr>
<td>resultado</td>
<td>Almacena las capturas de pantalla y genera el reporte html y los documento word</td>
</tr>
</tbody>
</table>
</div></template>
