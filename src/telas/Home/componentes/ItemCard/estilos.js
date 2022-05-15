import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',

    // Sombra Android
    elevation: 4,

    // Sombra IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  informacoes: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nome: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
