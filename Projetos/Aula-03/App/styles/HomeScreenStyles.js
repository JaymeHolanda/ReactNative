import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea', // Cor de fundo do botão
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 20, // Espaçamento horizontal
    borderRadius: 5, // Bordas arredondadas
    elevation: 2, // Sombra no Android
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});
