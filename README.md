# >_ NeonFolio

Uma experiência de portfolio cyberpunk imersiva construída com React, TypeScript e animações sofisticadas. O projeto apresenta uma estética neon dinâmica que muda ao longo do dia, com cenas interativas, efeitos de chuva em tempo real e parallax suave.

---

## 🖥️ Preview do Sistema

### Arquitetura de Componentes (Night Mode)
| **01. Hero Section** | **02. Workspace Section** |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/ad846a3b-1a32-421e-bab0-a8aa8e3222f0" width="450" /> | <img src="https://github.com/user-attachments/assets/d29b3611-118e-40ee-9c00-bc667496e35a" width="450" /> |

| **03. Stream Section** | **04. Uplink Section** |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/6dd1d72e-6eb8-4282-a4e4-9187f8a82eec" width="450" /> | <img src="https://github.com/user-attachments/assets/1be1486f-13b0-49b8-8ece-01c1e9f1896f" width="450" /> |

### Ciclo Dinâmico de Iluminação
> O sistema ajusta sua paleta de cores e iluminação automaticamente conforme o período do dia.

| Sunrise | Day | Sunset | Night |
| :---: | :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/362d3257-0d1a-402b-ab8c-ece13a95bc4d" width="200" /> | <img src="https://github.com/user-attachments/assets/d9f6abc5-8b26-46b8-8e55-906ce90773fe" width="200" /> | <img src="https://github.com/user-attachments/assets/3f159ec2-4d65-4d54-85e7-6076fee80234" width="200" /> | <img src="https://github.com/user-attachments/assets/eb817541-a9c4-48da-a79d-3554ae2d85d2" width="200" /> |

### Sistema Climático (Rain Cycle)
> Implementação de sistema procedural de chuva com camadas de profundidade e opacidade dinâmica.

<div align="center">
  <img src="https://github.com/user-attachments/assets/02f588b0-51e4-4b91-8634-f590df7a044f" width="920" />
</div>

---

## 🎨 Características

- **Temas Dinâmicos por Hora**: A aparência visual muda em tempo real com 4 períodos do dia (sunrise, day, sunset, night)
- **Animações Sofisticadas**: Parallax suave com spring physics, efeitos de raio em tempestades
- **Chuva Interativa**: Sistema de ciclo climático com intensidade variável (low, medium, storm)
- **Responsividade Completa**: Design mobile-first com breakpoints otimizados (425px, 768px)
- **TypeScript Rigoroso**: Tipagem completa com modo strict ativado
- **Otimizado para Performance**: GPU acceleration, memoization eficiente, sem memory leaks

## 🚀 Tecnologias

- **React 19.2.6** - UI framework moderno
- **TypeScript 6.0.2** - Type safety
- **Vite 8.0.12** - Build tool de alta performance
- **Tailwind CSS 4.3.0** - Styling utilitário
- **Framer Motion 12.40.0** - Animações avançadas
- **Lucide Icons 1.16.0** - Biblioteca de ícones SVG

## 📦 Setup & Desenvolvimento

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) com HMR habilitado.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React organizados por feature
│   ├── Hero/           # Seção inicial com sky e clouds
│   ├── Stream/         # Galeria de projetos
│   ├── Uplink/         # Terminal interativo
│   ├── Workspace/      # Editor de código e retrograde
│   ├── ErrorBoundary.tsx # Tratamento de erros
│   └── ...
├── hooks/              # Custom hooks reutilizáveis
│   ├── useHour.ts      # Rastreamento de hora em tempo real
│   ├── useRainCycle.ts # Simulação de ciclo climático
│   └── useParallaxTransforms.ts # Efeito parallax dinâmico
├── types/              # Tipos TypeScript centralizados
│   └── index.ts        # Interface definitions
├── utils/              # Funções utilitárias e constantes
│   ├── projects.ts     # Dados de projetos
│   ├── themeUtils.ts   # Temas e períodos de tempo
│   └── editorData.ts   # Configuração do editor
├── assets/             # Imagens organizadas por seção
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Documentação de Hooks

### `useHour()`

Rastreia a hora atual em tempo real com precisão até segundos.

```typescript
/**
 * Retorna a hora atual como número decimal (0-24)
 * Ex: 14.5 = 14:30:00
 */
const hour = useHour();
```

**Uso**: Determina o tema visual baseado na hora do dia.

---

### `useRainCycle()`

Simula um ciclo climático realista com períodos aleatórios de chuva e seco.

```typescript
/**
 * Gerencia o estado de chuva com intensidade variável
 * @returns {Object} { intensity, isRaining }
 * - intensity: "low" | "medium" | "storm"
 * - isRaining: boolean
 */
const { intensity, isRaining } = useRainCycle();
```

**Lógica**:

- Inicia com 15s de espera
- Alterna entre períodos secos (30-90s) e chuva (30-60s)
- Intensidade aleatória com probabilidade: 40% low, 40% medium, 20% storm

---

### `useParallaxTransforms(heroRef, workspaceRef)`

Cria um efeito parallax sofisticado com spring physics integrado ao Framer Motion.

```typescript
/**
 * Calcula transforms de parallax baseados em scroll
 * @param heroContainerRef - Referência ao container hero
 * @param workspaceContainerRef - Referência ao container workspace
 * @returns { workspaceY, streamTotalY } Motion values
 */
const { workspaceY, streamTotalY } = useParallaxTransforms(
  heroRef,
  workspaceRef,
);
```

**Recursos**:

- Spring physics suave (damping: 15, stiffness: 100)
- Responsivo (mobile: -0.2x, desktop: -0.4x)
- Sincronização com `useLayoutEffect`

---

## 🎯 Documentação de Componentes

### Componentes de Seção

Todos os componentes principais (`Hero`, `Stream`, `Uplink`, `Workspace`) seguem a mesma interface:

```typescript
interface SectionProps {
  hour: number; // Hora atual (0-24)
  isRaining: boolean; // Estado de chuva
  rainIntensity: RainIntensity; // "low" | "medium" | "storm"
}
```

---

### Component: Sky

Renderiza o céu com efeitos de raio dinâmicos durante tempestades.

**Features**:

- Lightning aleatório em períodos de storm (20-40% de chance)
- Cores adaptadas conforme hora do dia
- Cleanup automático de timers

```typescript
<Sky hour={14} isRaining={true} rainIntensity="storm" />
```

---

### Component: Clouds

Nuvens geradas proceduralmente com cores adaptadas ao clima.

**Features**:

- 5 nuvens por renderização com posições aleatórias
- Cores mais escuras durante chuva
- Animações CSS otimizadas

---

### Component: Rain

Simulação de chuva com 3 camadas de gradientes para profundidade.

**Configurações por Intensidade**:

- `low`: 20% opacidade, velocidade 0.55s
- `medium`: 40% opacidade, velocidade 0.35s
- `storm`: 65% opacidade, velocidade 0.18s

---

### Component: ErrorBoundary

Tratamento de erros com fallback UI amigável.

**Features**:

- Captura erros de rendering de componentes
- Exibe UI em modo escuro (tema neon)
- Botão para recarregar página
- Mostra stack trace em desenvolvimento

```typescript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## 🔍 Tipos Centralizados

Todos os tipos estão em `src/types/index.ts`:

```typescript
// Tipo para intensidade de chuva
type RainIntensity = "low" | "medium" | "storm";

// Interface base para componentes de seção
interface SectionProps {
  hour: number;
  isRaining: boolean;
  rainIntensity: RainIntensity;
}

// Interface para projetos
interface Project {
  id: number;
  title: string;
  preview: string;
  description: string;
  techs: string[];
  links: { live: string; github: string };
}
```

---

## ⚙️ Configuração TypeScript

O projeto utiliza TypeScript com modo strict:

```json
{
  "compilerOptions": {
    "target": "es2023",
    "jsx": "react-jsx",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "strict": true
  }
}
```

---

## 🛡️ Boas Práticas Implementadas

✅ **Type Safety**: Sem `any`, interfaces em tudo  
✅ **Performance**: Memoization, GPU acceleration, cleanup de effects  
✅ **Modularidade**: Componentes isolados, responsabilidade única  
✅ **Responsividade**: Mobile-first, breakpoints 425px e 768px  
✅ **Error Handling**: Error Boundary para segurança  
✅ **Code Quality**: ESLint + TypeScript strict mode

---

## 📝 Licença

MIT
