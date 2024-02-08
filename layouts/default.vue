<template>
  <div class="">
    <div class="bg-gray-900 h-screen text-white flex flex-col relative">
      <div class="absolute top-0 left-0 right-0 bottom-0 opacity-30 h-screen overflow-hidden border-b-2 border-gray-50">
        <video class="min-h-screen w-full object-cover" autoplay loop src="/background_hero_animation.mp4"></video>
      </div>

      <div class="max-w-7xl mx-auto xl:py-2 animate duration-500 flex flex-col grow z-10 space-y-16 h-screen">
        <Navigation />

        <div class="grow space-x-16 flex-1 flex justify-around w-full z-10 flex items-center">
          <!--        <img src="/official-logo.png" class="w-32 h-32 animate-pulse">-->
          <div class="flex-1 flex flex-col justify-center space-y-8 relative">

            <div class="relative text-purple-200 font-bold flex-col" data-v-c1c11d52="">
              <span class="uppercase font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Pofer to community</span>
              <br>
              <span class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">WIF SAMO</span>
            </div>

            <div>
              SAMOWIF is a community-driven memecoin that puts the power in the hands of the people. Our mission is to build a strong and healthy community by providing tools and services that will benefit everyone. With SAMOWIF power, we can conquer the world!
            </div>
          </div>

          <div class="w-[512px] h-[512px] block relative">
            <div class="absolute gradient -z-10 -left-1/2 w-[1000px] h-[1000px]"></div>
            <div class="absolute gradient -z-10 -right-1/2"></div>
            <img class="w-[512px] h-[512px] ring-4 ring-cyan-500/70 custom-border-radius" src="/samowif-collection.gif">
            <div class="flex justify-center mt-8">
              <button class="ring-2 ring-cyan-500/70 rounded-md bg-cyan-500/50 px-3 py-1.5 uppercase cursor-not-allowed">Mint (Coming soon...)</button>
            </div>
          </div>
        </div>
      </div>

      <button class="flex justify-center items-center py-8 animate-pulse animate-bounce duration-500 flex flex-col">
        <span class="uppercase">Contribute using <span class="text-green-500 text-bold">Jupiter</span></span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </button>
    </div>

    <div id="jupiter-section" class="border-b-2 border-teal-500 jupiter-background">
      <div class="max-w-7xl mx-auto py-16">
        <div class="w-full">
          <div class="flex-1 flex justify-end">
            <WalletMultiButton />
          </div>
        </div>
        <div class="space-y-8">
          <h1 class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Why contribute?</h1>

          <div>
            <p>Contributing, or rather investing, in the project grants you, as an official SAMOWIF holder, the privilege to participate in governance and steer the project’s direction.</p>
            <p>By purchasing through the <a target="_blank" href="https://jup.ag/swap/SOL-SAMOWIF_GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM" class="text-green-500">Jupiter</a> aggregator platform, no additional expense will be added during the exchange.</p>
            <p>If, however, you wish to support the SamoWifHat project through voluntary donations, our official community wallet is: <code class="text-teal-300 font-bold">7MY82cpyg4r5QsyeGieotiR6K1wcCfkjUT59ykFoPujH</code></p>
          </div>
        </div>

        <div>
          <div class="flex flex-col md:flex-row md:space-x-4 justify-center p-4">
            <div class="flex flex-col">
              <label class="uppercase">SOL amount</label>
              <input v-model="exchangeOptions.inputAmount" placeholder="SOL" min="0" max="100" type="number" @change="executeExactQuoteIn" class="bg-transparent text-4xl w-32 outline-none py-4"></input>
            </div>
            <div class="flex flex-col">
              <label class="uppercase">Slippage</label>
              <input v-model="exchangeOptions.slippage" placeholder="Slippage" type="number" min="0" max="100" class="bg-transparent text-4xl w-16 outline-none py-4"></input>
            </div>
          </div>
          <div class="flex flex-col md:space-x-4 justify-center p-4">
            <div class="flex flex-col">
              <label class="uppercase md:text-center">Samowif</label>
              <input :value="Number(exchangeOptions.outputAmount).toFixed(2)" placeholder="SAMOWIF" type="number" disabled class="bg-transparent text-5xl md:text-center w-full outline-none cursor-not-allowed"></input>
            </div>
          </div>

          <div class="flex justify-center">
            <button @click="executeSwap" class="uppercase middle items-center flex none center bg-cyan-500/50 rounded-full py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Exchange</button>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="flex justify-center items-center py-8 animate-pulse animate-bounce duration-500 flex flex-col">
          <span class="uppercase">our <span class="text-cyan-500 text-bold">Tokenomics</span></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>

    <div id="tokenomics-section" class="pt-16 border-b-2 border-teal-500 bg-teal-900/50">
      <div class="max-w-7xl mx-auto space-y-8 py-16">
        <div>
          <div class="space-y-8">
            <h1 class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Tokenomics Overview</h1>
            <div>
              <p>Our token’s liquidity is permanently burned, ensuring a stable and fair market. Ownership has been renounced, cementing its decentralized nature and securing it against manipulation.</p>
            </div>
          </div>
        </div>
<!--        <div>-->
<!--          <div class="flex items-center space-x-1">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-200">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />-->
<!--            </svg>-->

<!--            <div>-->
<!--              Fairlaunched-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="flex items-center space-x-1">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-200">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />-->
<!--            </svg>-->

<!--            <div>-->
<!--              Renounced and LP Burned-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="flex items-center space-x-1">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-200">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />-->
<!--            </svg>-->

<!--            <div>-->
<!--              Community driven-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div>
          <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in stats" :key="item.id" class="relative overflow-hidden rounded-lg ring-1 ring-teal-50/10 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 bg-teal-900/10">
              <dt class="flex items-center">
                <div class="absolute rounded-md p-3">
                  <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
                </div>
                <p class="ml-16 truncate uppercase text-2xl">{{ item.name }}</p>
              </dt>
              <dd v-if="item.href" class="ml-16 flex items-baseline pb-6 sm:pb-7">
                <div class="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-6">
                  <div class="text-sm">
                    <a :href="item.href" class="font-medium"
                    >View tx</a
                    >
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="flex justify-center items-center py-8 animate-pulse animate-bounce duration-500 flex flex-col">
          <span class="uppercase">our <span class="text-amber-500 text-bold">Roadmap</span></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>

    <div id="roadmap-section" class="mt-16 border-b-2 border-teal-500">
      <div class="max-w-7xl mx-auto py-16">
        <div>
          <div class="space-y-8">
            <h1 class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Roadmap</h1>
            <div>
              <p>Our roadmap is a dynamic blueprint, designed to adapt to the evolving landscape of our project and community needs. While we aim to adhere to the outlined milestones, we remain open to changes that may enhance our journey. Our commitment is to progress, not to a fixed path.</p>
            </div>
          </div>
        </div>

        <div>
          <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in roadmap_items" :key="item.id" class="relative overflow-hidden rounded-lg ring-1 ring-teal-50/10 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 bg-teal-900/10">
              <div class="flex items-center">
<!--                <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />-->
                <!--                <p class="ml-16 truncate uppercase text-2xl">{{ item.name }}</p>-->
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{item.time}}</div>
              </div>
              <div class="">

                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline uppercase text-orange-200">{{item.name}}</a>
                <p class="mt-2 text-gray-200" v-for="subitems in item.items">• <b>{{subitems}}</b></p>

<!--                <div class="text-sm">-->
<!--                  <a :href="item.href" class="font-medium"-->
<!--                  >View tx</a-->
<!--                  >-->
<!--                </div>-->
              </div>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="flex justify-center items-center py-8 animate-pulse animate-bounce duration-500 flex flex-col">
          <span class="uppercase">our <span class="text-slate-300 text-bold">Leaderboard</span></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>

    <div id="leaderboard-section" class="mt-16 border-b-2 border-teal-500">
      <div class="max-w-7xl mx-auto py-16">
        <Leaderboard />
      </div>

      <div class="flex justify-center">
        <button class="flex justify-center items-center py-8 animate-pulse animate-bounce duration-500 flex flex-col">
          <span class="uppercase">our <span class="text-blue-500 text-bold">Socials</span></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto p-2 grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navigation from "../components/layout/default/navigation.vue";
import {useWallet, WalletMultiButton} from "solana-wallets-vue";
import Leaderboard from "../components/leaderboard.vue";
import Footer from "../components/layout/default/footer.vue";
// import {Connection, VersionedTransaction} from "@solana/web3.js";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
import {CursorArrowRaysIcon, EnvelopeOpenIcon, FireIcon, ShieldCheckIcon, UsersIcon} from '@heroicons/vue/24/outline'
import {CalculatorIcon} from "@heroicons/vue/24/solid";

const stats = [
  { id: 1, name: 'Ownership Renounced', href: '/', icon: ShieldCheckIcon, },
  { id: 2, name: 'LP Burned', href: '/', icon: FireIcon},
  { id: 3, name: 'Total supply', icon: CalculatorIcon},
]

const roadmap_items = [
  { id: 1, time: 'Q1 2024', name: 'Foundation and Launch', items: ['Token Fair-Launch', 'Renounced and LP burned', 'Community Building' ], },
  { id: 2, time: 'Q2 2024', name: 'Ecosystem Development', items: ['NFT Collection Release', 'Marketing Campaign', 'Partnerships' ], },
  { id: 3, time: 'Q3 2024', name: 'Growth and Expansion', items: ['Community Governance', 'Platform Optimization', 'And more...' ], },
];

interface IExchangeOptions {
  inputAmount: number;
  outputAmount: number;
  slippage: number;
  quoteResponse: any | null;
}

const exchangeOptions = ref<IExchangeOptions>({
  inputAmount: 0,
  outputAmount: 0,
  slippage: 0.5,
  quoteResponse: null
});

const executeSwap = async () => {
// get serialized transactions for the swap
//   const { swapTransaction } = await (
//       await fetch('https://quote-api.jup.ag/v6/swap', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           // quoteResponse from /quote api
//           quoteResponse: exchangeOptions.value.quoteResponse,
//           // user public key to be used for the swap
//           userPublicKey: useWallet().publicKey.value?.toBase58(),
//           // auto wrap and unwrap SOL. default is true
//           wrapAndUnwrapSol: true,
//           // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
//           // feeAccount: "fee_account_public_key"
//         })
//       })
//   ).json();
//
//   // deserialize the transaction
//   const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
//   var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
//   console.log(transaction);
//
//   // const signedTx = await useWallet().signTransaction.value(transaction);
//   // console.log(signedTx);
//   const connection = new Connection('https://delicate-dry-sea.solana-mainnet.quiknode.pro/491fc2e3358a17e5c6131ff17f1df4294e298d78/');
//   const sentTx = await useWallet().sendTransaction(transaction, connection);
//
//   console.log(sentTx);
}

const executeExactQuoteIn = async () => {
// // Swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
  const quoteResponse = await (
      await fetch(`https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112
&outputMint=GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM
&amount=${Number(exchangeOptions.value.inputAmount * 1000000000)}
&slippageBps=${exchangeOptions.value.slippage * 100}`)
  ).json();

  exchangeOptions.value.outputAmount = Number(quoteResponse?.outAmount / 1000000);
  exchangeOptions.value.quoteResponse = quoteResponse;
}
</script>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.gradient {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}
/*body {*/
/*  background-color: #222;*/
/*  position: absolute;*/
/*  inset: 0;*/
/*  display: flex;*/
/*  place-content: center;*/
/*  align-items: center;*/
/*  overflow: hidden;*/
/*}*/

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}

.custom-border-radius {
  border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%
}

.jupiter-background {
  background: linear-gradient(to right, rgba(30, 87, 153, 0.3) 0%, rgba(44, 224, 191, 0.3) 19%, rgba(118, 221, 44, 0.3) 40%, rgba(219, 166, 43, 0.3) 60%, rgba(224, 44, 191, 0.3) 83%, rgba(30, 87, 153, 0.3) 100%);
  background-size: 10000px 100%;
  animation: bg 15s linear infinite;
}

.swv-button {
  @apply bg-transparent hover:bg-green-500;
}
.swv-button-trigger {
  @apply bg-transparent hover:bg-green-500;
}

@keyframes bg {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 10000px;
  }
}
</style>