import React from "react";

export default  CardForm = () => {
    onSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = [...formData.values()];

        const card = { number: data[0], balance: +data[1] };

        this.props.handleOpenCard(card);
        evt.target.reset();
    };


    return (
        <form
            onSubmit={this.onSubmit}
            className="card"
            style={{ width: "18rem" }}
        >
            <div className="card-body">
                <h5 className="card-title">
                    Карта
                    <input placeholder="XXXX XXXX XXXX XXXX" name="number" />
                </h5>
                <div className="card-text">
                    <ul className="list-group">
                        <input
                            className="list-group-item"
                            placeholder="Баланс"
                            name="balance"
                        />
                        <hr />
                        <button type="submit" className="btn btn-success">
                            Открыть карту
                        </button>
                    </ul>
                </div>
            </div>
        </form>
    );
}

