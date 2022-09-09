
function App() {

  const Polygon = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x89',
            chainName: 'Polygon Mainnet',
            rpcUrls: ['https://rpc-mainnet.matic.network'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Mumbai = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x13881',
            chainName: 'Mumbai Test Network',
            rpcUrls: ['https://rpc-mumbai.matic.today'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Ethereum = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x1',
            chainName: 'Ethereum Mainnet',
            rpcUrls: ['https://mainnet.infura.io/v3/'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Rinkeby = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x4',
            chainName: 'Rinkeby Test Network',
            rpcUrls: ['https://rinkeby.infura.io/v3/'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Kovan = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x2a',
            chainName: 'Kovan Test Network',
            rpcUrls: ['https://kovan.infura.io/v3/'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Ropsten = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x3',
            chainName: 'Ropsten Test Network',
            rpcUrls: ['https://ropsten.infura.io/v3/'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Goerli = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x5',
            chainName: 'Goerli Test Network',
            rpcUrls: ['https://goerli.infura.io/v3/'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Sokol = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x4d',
            chainName: 'SOKOL POA Test Network',
            rpcUrls: ['https://sokol.poa.network'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Avalanche = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xa86a',
            chainName: 'Avalanche Mainnet C-Chain',
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  const Fuji = async() => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xa869',
            chainName: 'Avalanche FUJI C-Chain',
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
          },
        ],
      });
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div>
      <h1>Add Networks to your Metamask wallet</h1>

      <button onClick={Polygon}>Add Polygon Main Network</button>
      <button onClick={Mumbai}>Add Mumbai Test Network</button>
      <button onClick={Ethereum}>Add Ethereum Main Network</button>
      <button onClick={Kovan}>Add Kovan Test Network</button>
      <button onClick={Rinkeby}>Add Rinkeby Test Network</button>
      <button onClick={Goerli}>Add Goerli Test Network</button>
      <button onClick={Ropsten}>Add Ropsten Test Network</button>
      <button onClick={Sokol}>Add SOKOL POA Test Network</button>
      <button onClick={Avalanche}>Add Avalanche Main Network</button>
      <button onClick={Fuji}>Add FUJI Test Network</button>
    </div>
  );
}

export default App;
