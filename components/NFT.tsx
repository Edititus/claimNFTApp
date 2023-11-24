import {
  useAddress,
  useContract,
  useNFT,
  useNFTBalance,
  Web3Button,
} from '@thirdweb-dev/react-native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const NFT = () => {
  const address = useAddress();
  const contractAddress = '0x9b9DF73Ea696FF30BF82132677C29C213856bF2A';
  const { contract } = useContract(contractAddress);

  const { data: nft } = useNFT(contract, 0);
  const { data: nftBalance, isLoading } = useNFTBalance(contract, address, 0);
  const nftImage = nft?.metadata.image;
  return (
    <ScrollView>
      <View style={styles.nftCard}>
        <Text style={styles.title}>{nft?.metadata.name}</Text>
        <Image style={styles.nftImage} source={{ uri: nftImage?.toString() }} />
        <Text style={styles.text}>
          <Text>You own: </Text>
          <Text>{isLoading ? '0' : nftBalance?.toString()}</Text>
        </Text>
        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Claim
        </Web3Button>
      </View>
      <Text style={styles.descriptionText}>Description: </Text>
      <Text style={styles.descriptionText}>{nft?.metadata.description}</Text>
    </ScrollView>
  );
};

export default NFT;

const styles = StyleSheet.create({
  nftCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
  },
  text: { fontSize: 24, marginBottom: 20 },
  nftImage: {
    height: 420,
    width: 300,
    marginBottom: 10,
    borderRadius: 6,
  },
  descriptionText: {
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
