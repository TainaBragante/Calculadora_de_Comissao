from sqlalchemy import Column, String, Integer, DateTime, Float
from datetime import datetime
from typing import Union
from  model import Base


class Funcionario(Base):
    __tablename__ = 'funcionario'

    id = Column("pk_funcionario", Integer, primary_key=True)
    nome = Column(String(140), unique=True)
    venda = Column(Float)
    porcentagem = Column(Integer)
    comissao = Column(Float)


    def __init__(self, nome:str, venda:float, porcentagem:int, comissao:float):
        """
        Cria um Funcionario

        Arguments:
            nome: nome do funcionario.
            porcentagem: porcentagem que se espera comprar daquele funcionario
            venda: venda esperado para o funcionario
            data_insercao: data de quando o funcionario foi inserido à base
        """
        self.nome = nome
        self.venda = venda
        self.porcentagem = porcentagem
        self.comissao = comissao

