<script setup lang="ts">
import StackedNavigation from "~/components/shared/StackedNavigation.vue";
import Footer from "~/components/shared/Footer.vue";
import {useWallet} from "solana-wallets-vue";
import {Connection, LAMPORTS_PER_SOL, PublicKey, VersionedTransaction} from "@solana/web3.js";
import {getAccount} from "@solana/spl-token";

const connection = new Connection('https://delicate-dry-sea.solana-mainnet.quiknode.pro/491fc2e3358a17e5c6131ff17f1df4294e298d78/');
const quoteAmount = ref(0);
const samowifAmount = ref(0);

const quoteAmountInLamport = computed(() => quoteAmount.value * (10 ** 9))
const samowifAmountFromLamport = computed(() => samowifAmount.value / (10 ** 6))

const quoteSamowif = async () => {
  const quoteResponse = await (
      await fetch(`https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112
&outputMint=GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM
&amount=${quoteAmountInLamport.value}
&slippageBps=50`
      )
  ).json()

  // const tokenInfo = await getAccount(connection, new PublicKey('GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM'));

  samowifAmount.value = quoteResponse.outAmount;
}

const swapSamowif = async (quoteResponse: any) => {
  // get serialized transactions for the swap
  const { swapTransaction } = await (
      await fetch('https://quote-api.jup.ag/v6/swap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // quoteResponse from /quote api
          quoteResponse,
          // user public key to be used for the swap
          userPublicKey: useWallet().publicKey.value?.toBase58(),
          // auto wrap and unwrap SOL. default is true
          wrapAndUnwrapSol: true,
          // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
          // feeAccount: "fee_account_public_key"
        })
      })
  ).json();

  // deserialize the transaction
  const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
  var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
  console.log(transaction);

  // const signedTx = await useWallet().signTransaction.value(transaction);
  // console.log(signedTx);

  const sentTx = await useWallet().sendTransaction(transaction, connection);

  console.log(sentTx);

// sign the transaction
//   transaction.sign([useWallet().publicKey.value?.toBase58()]);

  // Execute the transaction
  // const rawTransaction = transaction.serialize()
  // const txid = await connection.sendRawTransaction(rawTransaction, {
  //   skipPreflight: true,
  //   maxRetries: 2
  // });
  // await connection.confirmTransaction(txid);
  // console.log(`https://solscan.io/tx/${txid}`);
}

</script>

<template>

  <div class="grow overflow-scroll-y relative min-h-screen">
    <StackedNavigation />
    <div class="">
      <div class="absolute top-0 left-0 right-0 bottom-0 opacity-30 h-screen -z-10 overflow-hidden border-b-2 border-gray-50">
        <video src="/background_hero_animation.mp4" autoplay loop class="min-h-screen w-full object-cover" />
      </div>
    </div>

    <div class="flex flex-col grow items-center relative">
      <div class="justify-center mt-8 md:my-16">
        <img src="/official-logo.png" class="h-48 w-48" />
      </div>

      <div class="max-w-7xl mx-auto p-4">
        <div class="space-y-8">
          <!--      <div class="relative italic text-orange-400 font-bold inline-flex flex-col">-->
          <!--        <div>-->
          <!--          <span class="uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Building for</span> <span class="uppercase text-2xl sm:text-4xl md:text-3xl md:hidden">community</span>-->
          <!--        </div>-->
          <!--        <div>-->
          <!--          <span class="text-orange-50 uppercase italic text-2xl sm:text-4xl md:text-4xl lg:text-5xl">with help of</span> <span class="text-orange-50 uppercase italic text-2xl sm:text-4xl md:text-3xl md:hidden">community</span>-->
          <!--        </div>-->

          <!--        <span class="absolute -right-5 translate-x-full md:h-full md:flex md:items-center hidden md:block md:text-7xl lg:text-8xl uppercase">-->
          <!--          Community-->
          <!--        </span>-->
          <!--      </div>-->

          <div class="relative text-purple-200 font-bold flex-col">
            <span class="uppercase font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Pofer to community</span>
            <br />
            <span class="text-teal-300 uppercase text-2xl sm:text-4xl md:text-4xl lg:text-5xl">WIF SAMOWIF</span>
          </div>

          <div class="font-light text-lg md:text-2xl">
            <!--        Raised Network approach to development is simple yet powerful: we strongly emphasize the importance of the community and its involvement. <br /> We believe that the community is the most important asset and we want to build a strong and healthy community around Raised Network.-->
            <!--        <br />-->
            <!--        <br />-->
            <!--        The approach we choose to follow is simple yet powerful: we strongly emphasize the importance of the community and its involvement in the development. <br /> We believe that the community is the most important asset and we want to build a strong and healthy community around Raised Network.-->
            <!--        <br />-->
            <!--        <br />-->
            <div class="text-teal-100">
              SAMOWIF is a community-driven memecoin that puts the power in the hands of the people. Our mission is to build a strong and healthy community by providing tools and services that will benefit everyone. With SAMOWIF power, we can conquer the world!
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
            <ULink to="https://rugcheck.xyz/tokens/GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM" target="_blank" class="middle items-center flex none center bg-cyan-500/50 rounded-full py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <img src="https://rugcheck.xyz/favicon.png" class="mr-1 h-6 w-6 inline-block" />
              RugCheck
            </ULink>
            <ULink to="https://birdeye.so/token/GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM?chain=solana" target="_blank" class="middle items-center flex none center bg-cyan-500/50 rounded-full py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <img src="https://birdeye.so/favicon.ico" class="mr-1 h-6 w-6 inline-block" />
              Birdeye
            </ULink>
          </div>

<!--          <iframe class="w-full h-screen border border-teal-400 rounded shadow-md shadow-teal-500" loading="lazy" src="https://jup.ag/swap/SOL-SAMOWIF_GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM"></iframe>-->
<!--          <iframe class="w-full h-screen border border-teal-400 rounded shadow-md shadow-teal-500" src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM&inputAmount=0&fixed=in"></iframe>-->
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-cyan-400/10 to-blue-400/10" aria-labelledby="footer-heading">

    <div class="max-w-7xl mx-auto py-32 px-8">
      <h1 class="uppercase font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl">Swap</h1>

      <UInput
          :padded="false"
          placeholder="How much to swap in SOL..."
          type="number"
          variant="none"
          class="w-full"
          v-model="quoteAmount"
          @change="quoteSamowif"
      />
      <UInput
          :padded="false"
          placeholder="recieved"
          type="number"
          variant="none"
          :model-value="samowifAmountFromLamport"
          class="w-full"
          disabled
      />
    </div>

    <Footer />
  </div>





</template>

<style scoped>

@keyframes matrix-move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes colorChange {
  0% {
    color: black;
  }
  100% {
    color: green;
  }
}

.letter-animation {
  display: inline-block;
}

.letter-animation span {
  display: inline-block;
  opacity: 0;
  animation: colorChange 1s forwards;
}

.letter-animation span:nth-child(1) {
  animation-delay: 0.1s;
}

.letter-animation span:nth-child(2) {
  animation-delay: 0.2s;
}

.letter-animation span:nth-child(3) {
  animation-delay: 0.3s;
}

#home_container {
  height: calc(100vh - 60px);
}
</style>